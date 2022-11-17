from django.db import models
from django.conf import settings

# Create your models here.
class Funding(models.Model):
    # 펀딩작성유저
    user = models.ForeignKey(settings.AUTH_USER_MODE, on_delete=models.CASCADE)
    goal_moeny = models.IntegerField()
    minimum_money = models.IntegerField()
    poster_path = models.CharField(max_length=220, null=True)
    expired_date = models.DateField()
    created_at = models.DateField(auto_now_add=True)
    movie_title = models.CharField(max_length=100)
    content = models.TextField()

class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODE, on_delete=models.CASCADE)
    funding = models.ForeignKey(Funding, on_delete=models.CASCADE)
    content = models.TextField()
    star_rate = models.FloatField()

class Backers(models.Model):
    funding = models.ForeignKey(Funding, on_delete=models.CASCADE)    
    user = models.ForeignKey(settings.AUTH_USER_MODE, on_delete=models.CASCADE)
    donation = models.IntegerField(default=0)