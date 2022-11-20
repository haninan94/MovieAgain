from django.db import models
from django.conf import settings


# Create your models here.
class Genre(models.Model):
    name = models.TextField()

    def __self__(self):
        return self.name


class Movie(models.Model):
    backdrop_path = models.CharField(max_length=220, null=True)
    genre_ids = models.ManyToManyField(Genre)
    overview = models.TextField()
    poster_path = models.CharField(max_length=220, null=True)
    release_date = models.DateField(null=True)
    title = models.CharField(max_length=100)
    vote_average = models.FloatField()
    vote_count = models.IntegerField()

    def __str__(self):
        return self.title


class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # token = models.CharField(max_length=300)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content
