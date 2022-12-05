from django.urls import path
from .views import Register, RetrieveUser, MyTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('', RetrieveUser.as_view()),
    path('signup', Register.as_view()),
    path('login', MyTokenObtainPairView.as_view()),
    path('token/refresh', TokenRefreshView.as_view()),
    path('token/verify', TokenVerifyView.as_view()),
]