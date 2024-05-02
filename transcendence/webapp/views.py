from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.utils.html import escape
from datetime import datetime
from django.shortcuts import get_object_or_404
from .models import GameResult
import json


def index(request):
    return render(request, 'index.html')


def register_username(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # username = self.cleaned_data['username']
        username = data.get('username')

        # Protection against XSS and SQL injection
        username = escape(username)

        # Validation (make sure username is not empty)
        if not username:
            return JsonResponse({'success': False, 'error': 'Username is required.'})

        # Check if the username already exists
        if User.objects.filter(username=username).exists():
            return JsonResponse({'success': True})


        # Create the user
        try:
            user = User.objects.create_user(username=username)
            print("Existing users:", user)
            for existing_user in User.objects.all():
                print(existing_user.username)
            return JsonResponse({'success': True})
        except IntegrityError:
            return JsonResponse({'success': False, 'error': 'Failed to create user.'})
        except Exception as e:  # Catch other potential errors
            return JsonResponse({'success': False, 'error': str(e)})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})


# saves the games info in a model GameResult, and associates it to the 'username'
def save_game_result(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_id = data.get('username')
            game_id = data.get('gameHistory', {}).get('game_id')
            position = data.get('gameHistory', {}).get('position')
            date = datetime.now()
            bo_type = data.get('gameHistory', {}).get('bo_type')
            try:
                user = User.objects.get(username=user_id)
            except User.DoesNotExit:
                return JsonResponse({'success': False, 'error': 'User does not exist.'})


            # Create and save a new GameResult instance
            game_result = GameResult.objects.create(
                user=user,
                game_id=game_id,
                position=position,
                date=date,
                bo_type=bo_type
            )

            print("Saved game result:", game_result)  # Print saved game result for debugging


            # Return a success response
            return JsonResponse({'success': True})
        except Exception as e:
            # Return an error response if there was an issue
            return JsonResponse({'success': False, 'error': str(e)})
    else:
        # Return an error response for invalid request method
        return JsonResponse({'success': False, 'error': 'Invalid request method'})


# Returns the last 10 games associated to 'username', from game 'game_id'
def get_game_history(request):
    if request.method == 'GET':
        username = request.GET.get('username')
        game_id = request.GET.get('game_id')

        try:
            # Retrieve the last 10 game results of the specified type for the user
            game_history = GameResult.objects.filter(user__username=username, game_id=game_id).order_by('-date')[:10]

            # Prepare the response data
            history_data = [{'user': result.user.username, 'game_id': result.game_id, 'position': result.position, 'date': result.date, 'bo_type': result.bo_type} for result in game_history]

            return JsonResponse(history_data, safe=False)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=405)




def get_last_game(request):
    if request.method == 'GET':
        username = request.GET.get('username')
        user = get_object_or_404(User, username=username)  # Optimized user lookup
        last_game = GameResult.objects.filter(user=user).order_by('-date').first()

        if last_game:
            data = {
                'user': last_game.user.username,
                'game_id': last_game.game_id,
                'position': last_game.position,
                'date': last_game.date.strftime('%Y-%m-%d %H:%M:%S'),
                'bo_type': last_game.bo_type
            }
            return JsonResponse(data)
        else:
            return JsonResponse({'error': 'No game found for this user.'}, status=404)

    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=405)


def print_all_records(request):
    if request.method == 'GET':
        try:
            # Retrieve all users
            all_users = User.objects.all()

            # Retrieve all game results
            all_game_results = GameResult.objects.all()

            # Prepare response data
            user_data = [{'username': user.username} for user in all_users]
            game_result_data = [{'user': result.user.username, 'game_id': result.game_id, 'position': result.position, 'date': result.date, 'bo_type': result.bo_type} for result in all_game_results]

            # Print all records (for debugging purposes)
            for user in all_users:
                print(user)
            for result in all_game_results:
                print(result)

            # Return the response with both sets of data
            return JsonResponse({'users': user_data, 'game_results': game_result_data, 'success': True})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=405)

