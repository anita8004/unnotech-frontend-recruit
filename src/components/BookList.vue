<template>
  <div class="book-list">
    <div 
      class="book-item"
      v-for="book in store.books"
      :key="book.id"
      @click="$router.push({name: routesName.book, params: { id: book.id }})"
    >
      <!-- <div class="book-item__cover">
        <span 
          className="material-icons book-item__read-more"
          @click="$router.push({name: routesName.book, params: { id: book.id }})"
        >read_more</span>
        <span 
          className="material-icons book-item__delete"
          @click="delHandler(book.id)"
        >delete</span>
      </div> -->
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

const delHandler = async (bookId: number) => {
  await store.delBook(bookId);
  await store.fetchBooks();
}
</script>

<style lang="scss" scoped>
.book-list {
  @apply grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full;
}

.book-item {
  @apply p-4 bg-black rounded-md border border-transparent relative transition-colors overflow-hidden;
  &__cover {
    @apply w-full h-full flex justify-center items-center space-x-6;
    @apply absolute right-0 bottom-0 p-2 opacity-0 pointer-events-none transition-opacity;
    @apply bg-gray-900 bg-opacity-80;
    span {
      @apply hover:text-primary transition-colors;
    }
  }
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
    .book-item__cover {
      @apply opacity-100 pointer-events-auto;
    }
  }
}

@media (prefers-color-scheme: light) {
  .book-item {
    @apply bg-white hover:border-primary-light;
  }
}
</style>