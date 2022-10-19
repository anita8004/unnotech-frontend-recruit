<template>
  <div class="wrapper">
    <Header title="Books">
      <button>
        <span className="material-icons">add</span>
      </button>
    </Header>
    <main>
      <div class="book-list">
        <div 
          class="book-item"
          v-for="book in state.books"
          :key="book.id"
          @click="$router.push({name: routesName.book, params: { id: book.id }})"
        >
          <h3 class="book-item__title">{{book.title}}</h3>
          <h4 class="book-item__author">Author: {{book.author}}</h4>
          <p class="book-item__description">{{book.description}}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import requestAPIs from '../request';
import Header from '@/components/Header.vue';
import { routesName } from "../router";

  interface IState {
    books: BooksType[];
  }

  const state = reactive<IState>({
    books: []
  })

  const getBooks = async () => {
    try {
      const result = await requestAPIs.getBooks();
      state.books = result.data;
    } catch(err) {}
  }

  onMounted(() => {
    getBooks();
  })
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