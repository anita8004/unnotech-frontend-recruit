<template>
  <div class="wrapper">
    <Header title="Books">
      <button>
        <span className="material-icons">add</span>
      </button>
    </Header>
    <main>
      <Suspense>
        <template #fallback>
          <Loading/>
        </template>
        <template #default>
          <BookList/>
        </template>
      </Suspense>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import BookList from '@/components/BookList.vue';
import Loading from '@/components/Loading.vue';
</script>

<style lang="scss" scoped>
</style>