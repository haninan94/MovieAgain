from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.urls import path
from . import views

urlpatterns = [
    path('profile/<int:user_pk>/', views.profile, name='profile'),
    path('userinfo/', views.userinfo, name='userinfo'),
]
