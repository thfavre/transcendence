from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.utils.html import escape
from datetime import datetime
from django.shortcuts import get_object_or_404
import json


def index(request):
    return render(request, 'index.html')


def register_username(request):
    if request.method == 'POST':
        data = json.loads(request.body)
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
            print("Existing users:")
            for existing_user in User.objects.all():
                print(existing_user.username)
            return JsonResponse({'success': True})
        except IntegrityError:
            return JsonResponse({'success': False, 'error': 'Failed to create user.'})
        except Exception as e:  # Catch other potential errors
            return JsonResponse({'success': False, 'error': str(e)})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})



def save_game_result(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_id = data.get('username')
            game_id = data.get('game_id')
            position = data.get('position')
            date = datetime.now()
            bo_type = data.get('bo_type')
            print("Received data:", data)  # Print received data for debugging

            # Create and save a new GameResult instance
            game_result = GameResult.objects.create(
                user=user_id,
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

