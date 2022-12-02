from django.urls import path
from .views import Register, RetrieveUser


urlpatterns = [
    path('register', Register.as_view()),
    path('me', RetrieveUser.as_view()),

]