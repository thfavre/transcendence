from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import PlayerScore

def index(request):
    return render(request, 'index.html')

def update_score(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        player_name = data.get('name')
        player_score = data.get('score')

        # Assuming you have a PlayerScore model
		# Need to add the scores to the database
        score_entry, created = PlayerScore.objects.get_or_create(name=player_name)
        score_entry.score = player_score
        score_entry.save()

        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

