from django.urls import path
from . import views
from .views import UserRegistration,MyTokenObtainPairView



urlpatterns = [
    path('', views.getRoutes),
    path('register/', UserRegistration.as_view()),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('activate/<uidb64>/<token> ', views.activate, name='activate'),
]