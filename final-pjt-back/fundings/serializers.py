from rest_framework import serializers
from .models import Funding, Backers, Comment


class FundingListSerializer(serializers.ModelSerializer):
    # created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Funding
        fields = (
            'id',
            'user',
            'goal_money',
            'now_money',
            'poster_path',
            'expired_date',
            'movie_title',
            'content',
            'created_at',
        )
        read_only_fields = ('user',)


class CommentSerializer(serializers.ModelSerializer):
    # updated_at = serializers.DateTimeField(read_only=True)
    # created_at = serializers.DateTimeField(read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('funding',)


class CommentListSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = (
            'movie',
            'user',
        )


class FundingSerializer(serializers.ModelSerializer):
    # user_funding_comment = CommentSerializer(many=True, read_only=True)
    # comment_count = serializers.IntegerField(
    #     source='user_funding_comment.count', read_only=True
    # )
    # username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Funding
        fields = (
            'id',
            'user',
            'goal_money',
            'minimum_money',
            'poster_path',
            'expired_date',
            'movie_title',
            'content',
            'now_money',
        )
        # read_only_fields = (
        #     'now_money',
        #     'user',
        # )


class BackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Backers
        fields = '__all__'
        # read_only_fields = ('user', 'funding')
