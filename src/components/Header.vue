<template>
  <header class="page-header">
    <div class="prefix">
      <button class="back-button" @click="backHandler" v-if="showBack">
        <span className="material-icons">arrow_back_ios</span>
      </button>
    </div>
    <h2 class="page-title">{{title}}</h2>
    <div class="extra">
      <slot/>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
export default defineComponent({
  name: "Header",
  props: {
    title: {
      type: String,
      default: ""
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter();
    const backHandler = () => {
      router.back();
    }
    return {
      backHandler,
    }
  },
})
</script>
<style scoped>
.back-button {
  @apply border-none bg-transparent;
}
.page-header {
  @apply w-full p-4 flex justify-between items-center space-x-4;
}

.page-title {
  @apply font-bold text-2xl;
}
</style>