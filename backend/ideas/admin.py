from django.contrib import admin

from ideas.models import Idea, Favorite, Discuss, Subscribe


admin.site.register(Idea)
admin.site.register(Favorite)
admin.site.register(Discuss)
admin.site.register(Subscribe)