<template>
  <Form 
    class="form"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <div
      class="form-group"
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
    >
      <label class="form-label" :for="name">{{ label }}</label>
      <Field class="form-field" :as="as" :id="name" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage :name="name" />
    </div>
    <div class="text-center">
      <button class="mr-2" type="reset">取消</button>
      <button type="submit">送出</button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  initialValues: {
    type: Object,
  }
})

const emit = defineEmits<{
  (e: 'submit', values: Object): void
}>()

const onSubmit = (values: Object) => {
  emit("submit", values);
}

</script>

<style lang="scss" scoped>
.form {
  &-group {
    @apply mb-4;
  }
  &-label {
    @apply block mb-0.5;
  }
  &-field {
    @apply w-full rounded-md px-2;
    min-height: 2rem;
  }
}
</style>