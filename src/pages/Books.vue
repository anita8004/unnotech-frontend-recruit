<template>
  <div class="wrapper">
    <Header title="Books">
      <button @click="$router.push({name: routesName.addBook})">
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
import { routesName } from "../router";
</script>

<style lang="scss" scoped>
</style>