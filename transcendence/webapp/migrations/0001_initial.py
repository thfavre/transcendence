# Generated by Django 4.2.11 on 2024-05-02 11:38

from django.conf import settings
import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='GameResult',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('game_id', models.CharField(choices=[('PV', 'Pong Versus'), ('PT', 'Pong Tournament'), ('ES', 'Exit Solo'), ('ET', 'Exit Tournament')], max_length=2)),
                ('position', django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), size=2)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('bo_type', models.CharField(blank=True, choices=[('Fto1', 'First to 1 victory'), ('Fto2', 'First to 2 victory'), ('Fto3', 'First to 3 victory'), ('Fto4', 'First to 4 victory'), ('Fto5', 'First to 5 victory')], max_length=5, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
