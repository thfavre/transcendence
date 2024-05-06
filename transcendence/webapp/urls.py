"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from . import views
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('registerUsername', views.register_username, name='registerUsername'),
    path('save_game_result/', views.save_game_result, name='save_game_result'),
    path('get_last_game', views.get_last_game, name='get_last_game'),
    path('print_all_records/', print_all_records, name='print_all_records'),
    path('get_game_history/', get_game_history, name='get_game_history'),
    re_path(r'^(?!/static/).*$', index, name='app'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
