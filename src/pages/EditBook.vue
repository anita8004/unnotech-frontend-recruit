<template>
  <div class="wrapper">
    <Header title="修改書籍" showBack/>
    <main>
      <Suspense>
        <template #fallback>
          <Loading/>
        </template>
        <template #default>
          <BookForm formType="edit"/>
        </template>
      </Suspense>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import BookForm from '@/components/form/BookForm.vue';
import Loading from '@/components/Loading.vue';
</script>

<style lang="scss" scoped>

</style>