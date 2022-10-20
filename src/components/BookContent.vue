<template>
  <Header :title="bookInfo?.title" showBack>
    <button @click="$router.push({name: routesName.editBook, params: {id: bookInfo?.id}})">
      <span className="material-icons">edit_square</span>
    </button>
  </Header>
  <main>
    <div class="book-info">
      <div class="book-info__author">Author: {{bookInfo?.author}}</div>
      <div class="book-info__description">{{bookInfo?.description}}</div>
    </div>
  </main>
</template>

<script async setup lang="ts">
import Header from '@/components/Header.vue';
import { useRoute } from 'vue-router';
import { useBooksStore } from '../stores/books';
import { routesName } from "../router";
import { computed } from 'vue';

const store = useBooksStore();
const route = useRoute();
store.getCurrent(Number(route.params.id));
const bookInfo = computed(() => store.currentBook);
</script>

<style lang="scss" scoped>

</style>