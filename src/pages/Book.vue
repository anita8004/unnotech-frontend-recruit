<template>
  <div class="wrapper">
    <Suspense>
      <template #fallback>
        <Loading/>
      </template>
      <template #default>
        <BookContent/>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import BookContent from '@/components/BookContent.vue';
import Loading from '@/components/Loading.vue';
</script>

<style lang="scss" scoped>

</style>