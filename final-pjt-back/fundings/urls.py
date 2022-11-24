from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.urls import path
from . import views


urlpatterns = [
    path('fundings/', views.funding_list),
    path('fundings/<int:funding_pk>/', views.funding_detail),
    path('fundings/<int:funding_pk>/donation/', views.funding_donation),
    path('fundings/recommendlist/', views.funding_recommend_list),
    path('fundings/comments/', views.comment_list),
    path('fundings/comments/<int:comment_pk>/', views.comment_detail),
    path('fundings/<int:funding_pk>/commentcreate/', views.comment_create),
    path('fundings/<int:funding_pk>/comments/', views.funding_comment_list),
    path('fundings/search/', views.funding_search),
    # # 필수 작성
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    # # optional UI
    path(
        'swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'
    ),
]
