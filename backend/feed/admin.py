from django.contrib import admin

from feed.models import Tag, Post, Comment, Likes


admin.site.register(Tag)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Likes)