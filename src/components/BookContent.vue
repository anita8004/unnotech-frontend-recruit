<template>
  <Header :title="bookInfo?.title" showBack>
    <button>
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

<script setup lang="ts">
import Header from '@/components/Header.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import requestAPIs from '../request';

const props = defineProps({
  id: Number
})

const route = useRoute();
const bookInfo = ref<BookType>();
const result = await requestAPIs.getBook(Number(route.params.id));
bookInfo.value = result.data;
</script>

<style lang="scss" scoped>

</style>