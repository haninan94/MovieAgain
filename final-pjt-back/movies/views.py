from rest_framework.response import Response
from rest_framework.decorators import api_view

# Authentication Decorators
# from rest_framework.decorators import authentication_classes

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import MovieListSerializer, MovieSerializer, CommentSerializer, CommentListSerializer
from .models import Movie, Comment
from django.db.models import Q
from django.db.models import Avg

@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def movie_list(request):
    if request.method == 'GET':
        median_n = int(Movie.objects.all().count() / 2)
        vote_count_median = Movie.objects.all().order_by('vote_count')[median_n].vote_count
        movies = Movie.objects.filter(Q(vote_count__gte=vote_count_median) & Q(vote_average__gte=8.5)).order_by('?')[:50]

    elif request.method == 'POST':
        genre = request.data['genre']
        median_n = int(Movie.objects.filter(genre_ids=genre).count() / 2)
        vote_count_median = Movie.objects.all().order_by('vote_count')[median_n].vote_count
        movies = Movie.objects.filter(Q(genre_ids=genre) & Q(vote_average__gte=8) & Q(vote_count__gte=vote_count_median)).order_by('?')[0:5]
    serializer = MovieListSerializer(movies, many=True)
    return Response(serializer.data)

    # elif request.method == 'POST':
    #     serializer = MovieSerializer(data=request.data)
    #     if serializer.is_valid(raise_exception=True):
    #         # serializer.save()
    #         serializer.save(user=request.user)
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = MovieSerializer(movie, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def comment_list(request):
    if request.method == 'GET':
        # comments = Comment.objects.all()
        comments = get_list_or_404(Comment)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['GET', 'DELETE', 'PUT'])
# @permission_classes([IsAuthenticated])
def comment_detail(request, comment_pk):
    # comment = Comment.objects.get(pk=comment_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)
    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
    if str(comment.user) == str(request.user):
        if request.method == 'DELETE':
            comment.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        elif request.method == 'PUT':
            serializer = CommentSerializer(comment, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def comment_create(request, movie_pk):
    if request.method == 'POST':
        movie = get_object_or_404(Movie, pk=movie_pk)
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(movie=movie)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def movie_comment_list(request, movie_pk):
    if request.method == 'GET':
        comment = Comment.objects.filter(movie_id=movie_pk)
        serializer = CommentListSerializer(comment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
