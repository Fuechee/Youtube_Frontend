from django.urls import path
from comment import views

urlpatterns = [
    path("", views.create_post),
    path('<str:video_id>/', views.get_all_comments),
]