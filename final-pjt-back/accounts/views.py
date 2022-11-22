from django.contrib.auth import get_user_model
from rest_framework.response import Response
from fundings.serializers import BackerSerializer

from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404, get_list_or_404
from fundings.models import Backers
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def profile(request, user_pk):
    if request.method == 'GET':
        # User = get_user_model()
        # person = User.objects.get(username=username)
        # serializer = BackerSerializer()
        backers = Backers.objects.filter(user=user_pk)
        user = get_object_or_404(get_user_model(), pk=user_pk)
        print('**************************************************')
        print(user)
        serializer1 = BackerSerializer(backers, many=True)
        username = user.username
        return Response({'data': serializer1.data, 'username': username})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def userinfo(request):
    if request.method == 'POST':
        compare = request.data['username']
        User = get_user_model()
        user = User.objects.get(username=compare)
        userId = user.id
        return Response({'userId': userId})
