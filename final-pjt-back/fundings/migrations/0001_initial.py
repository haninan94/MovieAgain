from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Funding',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goal_money', models.IntegerField()),
                ('minimum_money', models.IntegerField()),
                ('now_money', models.IntegerField(default=0)),
                ('poster_path', models.CharField(max_length=220, null=True)),
                ('expired_date', models.DateField()),
                ('created_at', models.DateField(auto_now_add=True, null=True)),
                ('movie_title', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('funding', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fundings.funding')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_funding_comment', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Backers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('donation', models.IntegerField(default=0)),
                ('funding', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fundings.funding')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
