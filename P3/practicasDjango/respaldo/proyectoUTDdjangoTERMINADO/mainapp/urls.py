# urls de la aplicacion mainapp

from django.urls import path
from mainapp import views

urlpatterns = [
    path('', views.index,name='inicio'),
    path('inicio/', views.index,name='inicio'),
    path('acercade/',views.about,name='acercade'),
    path('mision/',views.mision, name='mision'),
    path('vision/', views.vision, name='vision'),
    path('registro/', views.register_user, name='registro'),
    path('login/', views.iniciosesion, name='login'),
    path('logout/', views.logout_user, name='logout'),

    
    ]
