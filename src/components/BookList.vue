<template>
  <div class="book-list">
    <div 
      class="book-item"
      v-for="book in store.books"
      :key="book.id"
      @click="$router.push({name: routesName.book, params: { id: book.id }})"
    >
      <h3 class="book-item__title">{{book.title}}</h3>
      <h4 class="book-item__author">Author: {{book.author}}</h4>
      <p class="book-item__description">{{book.description}}</p>
    </div>
  </div>
</template>

<script async setup lang="ts">
import { routesName } from "../router";
import { useBooksStore } from '../stores/books';

const store = useBooksStore();
await store.fetchBooks();
</script>

<style lang="scss" scoped>
.book-list {
  @apply grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full;
}

.book-item {
  @apply p-4 bg-black rounded-md border border-transparent;
  transition: border-color 0.25s;
  &__title {
    @apply text-xl mb-1 truncate;
  }
  &__author {
    @apply mb-1 truncate;
  }
  &__description {
    @apply text-xs;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  &:hover {
    @apply border-primary cursor-pointer;
  }
}

@media (prefers-color-scheme: light) {
  .book-item {
    @apply bg-white hover:border-primary-light;
  }
}
</style>