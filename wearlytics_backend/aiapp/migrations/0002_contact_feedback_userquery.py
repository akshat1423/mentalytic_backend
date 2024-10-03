# Generated by Django 5.1.1 on 2024-10-03 14:53

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("aiapp", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Contact",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("phone_number", models.CharField(max_length=20, unique=True)),
                ("channel", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="Feedback",
            fields=[
                (
                    "phone_no_from",
                    models.CharField(blank=True, max_length=20, null=True),
                ),
                ("question", models.TextField()),
                ("feedback", models.TextField()),
                ("feedback_id", models.AutoField(primary_key=True, serialize=False)),
                ("timestamp", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="UserQuery",
            fields=[
                (
                    "message_internal_id",
                    models.AutoField(primary_key=True, serialize=False),
                ),
                ("user_message", models.TextField()),
                ("bot_response", models.TextField()),
                ("response_message_segregation", models.TextField()),
                (
                    "profile_name",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "phone_no_from",
                    models.CharField(blank=True, max_length=20, null=True),
                ),
                ("created_at", models.DateTimeField(default=django.utils.timezone.now)),
                ("message_count", models.IntegerField(default=1)),
                ("currentstate", models.IntegerField(default=0)),
            ],
        ),
    ]
