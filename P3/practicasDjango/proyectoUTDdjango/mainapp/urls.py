from django.urls import path
from mainapp import views

urlpatterns = [
    path('', views.index, name='index'),
    path('inicio/', views.index, name='index'),
    path('acerca/', views.about, name='about'),
    path('mision/', views.mision, name='mision'),
    path('vision/', views.vision, name='vision'),
]