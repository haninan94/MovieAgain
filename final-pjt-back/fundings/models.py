from django.db import models
from django.conf import settings

# Create your models here.
class Funding(models.Model):
    # 펀딩작성유저
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    goal_moeny = models.IntegerField()
    minimum_money = models.IntegerField()
    now_money = models.IntegerField()
    poster_path = models.CharField(max_length=220, null=True)
    expired_date = models.DateField()
    created_at = models.DateField(auto_now_add=True)
    movie_title = models.CharField(max_length=100)
    content = models.TextField()


class Comment(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user_comment'
    )
    funding = models.ForeignKey(Funding, on_delete=models.CASCADE)
    content = models.TextField()
    star_rate = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_a = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content


class Backers(models.Model):
    funding = models.ForeignKey(Funding, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    donation = models.IntegerField(default=0)
