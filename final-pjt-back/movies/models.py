from django.db import models
from django.conf import settings


# Create your models here.
class Genre(models.Model):
    name = models.TextField()


class Movie(models.Model):
    genre_ids = models.ManyToManyField(Genre)
    overview = models.TextField()
    poster_path = models.CharField(max_length=220, null=True)
    release_date = models.DateField(null=True)
    title = models.CharField(max_length=100)
    vote_average = models.FloatField()
    vote_count = models.IntegerField()
    like_users = models.TextField(null=True)

class Comment(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)