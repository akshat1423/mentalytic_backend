# Generated by Django 5.1.1 on 2024-10-03 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("aiapp", "0002_contact_feedback_userquery"),
    ]

    operations = [
        migrations.CreateModel(
            name="AudioFile",
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
                ("title", models.CharField(max_length=100)),
                ("audio", models.FileField(upload_to="audios/")),
            ],
        ),
    ]
