from rest_framework.response import Response
from rest_framework.decorators import api_view

# Authentication Decorators
# from rest_framework.decorators import authentication_classes

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import (
    CommentSerializer,
    BackerSerializer,
    FundingListSerializer,
    FundingSerializer,
)
from .models import Funding, Comment, Backers


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def funding_list(request):
    if request.method == 'GET':
        # articles = Article.objects.all()
        fundings = get_list_or_404(Funding)
        serializer = FundingListSerializer(fundings, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FundingSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            # serializer.save()
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
def funding_detail(request, funding_pk):
    # article = Article.objects.get(pk=article_pk)
    funding = get_object_or_404(Funding, pk=funding_pk)

    if request.method == 'GET':
        serializer = FundingSerializer(funding)
        print(serializer.data)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        funding.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = FundingSerializer(funding, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


@api_view(['GET'])
def comment_list(request):
    if request.method == 'GET':
        # comments = Comment.objects.all()
        comments = get_list_or_404(Comment)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['GET', 'DELETE', 'PUT'])
def comment_detail(request, comment_pk):
    # comment = Comment.objects.get(pk=comment_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)

    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


@api_view(['POST'])
def comment_create(request, funding_pk):
    # article = Article.objects.get(pk=article_pk)
    funding = get_object_or_404(Funding, pk=funding_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(funding=funding)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
