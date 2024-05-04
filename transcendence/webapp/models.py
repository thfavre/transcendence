from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class GameResult(models.Model):
    # 4 types of games
    GAME_CHOICES = [
        ('PV', 'Pong Versus'),
        ('PT', 'Pong Tournament'),
        ('ES', 'Exit Solo'),
        ('ET', 'Exit Tournament'),
    ]

    BO_CHOICES = [
        ('1', 'First to 1 victory'),
        ('2', 'First to 2 victory'),
        ('3', 'First to 3 victory'),
        ('4', 'First to 4 victory'),
        ('5', 'First to 5 victory'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game_id = models.CharField(max_length=2, choices=GAME_CHOICES)
    position = ArrayField(models.IntegerField(), size=2)
    date = models.DateTimeField(auto_now_add=True)

    # Additional field for BO type if game ID is ET
    bo_type = models.CharField(max_length=1, choices=BO_CHOICES, blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s game {self.game_id} at position {self.position} on {self.date}"
