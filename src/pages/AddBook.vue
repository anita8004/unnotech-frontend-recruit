<template>
  <div class="wrapper">
    <Header title="新增書籍" showBack/>
    <main>
      <BookForm formType="add"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import BookForm from '@/components/form/BookForm.vue';
</script>

<style lang="scss" scoped>

</style>