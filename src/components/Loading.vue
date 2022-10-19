<template>
  <div class="page-loading">
    <span className="material-icons animate-spin">rotate_right</span>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.page-loading {
  @apply w-full h-screen flex justify-center items-center;
}

.material-icons {
  font-size: 48px;
}
</style>