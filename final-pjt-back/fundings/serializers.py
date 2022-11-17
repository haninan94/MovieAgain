from rest_framework import serializers
from .models import Funding, Backers, Comment

class FundingListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Funding
        read_only_fields = ('user')


class CommentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('user','funding')

class BackerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Backers
        fields = '__all__'
        read_only_fields = ('user','funding')