from rest_framework import serializers
from .models import Funding, Backers, Comment


class FundingListSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Funding
        read_only_fields = 'user'


class CommentSerializer(serializers.ModelSerializer):
    updated_at = serializers.DateTimeField(read_only=True)
    created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('user', 'funding')


class FundingSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True, read_only=True)
    comment_count = serializers.IntegerField(source='comment_set.count', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Funding
        fields = '__all__'
        read_only_fields = ('user',)


class BackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Backers
        fields = '__all__'
        read_only_fields = ('user', 'funding')
