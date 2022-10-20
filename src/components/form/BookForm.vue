<template>
  <DynamicForm
    class="book-form"
    :schema="formSchema"
    :formType="formType"
    @submit="submitHandler"
  />
</template>

<script setup lang="ts">
import DynamicForm from '@/components/form/DynamicForm.vue';
import { PropType } from 'vue';
import * as Yup from 'yup';
import { useBooksStore } from '../../stores/books';

const store = useBooksStore();

const props = defineProps({
  formType: {
    type: String as PropType<"add" | "edit">,
    default: "add"
  },
})

const formSchema = {
  fields: [
    {
      label: '標題',
      name: 'title',
      as: 'input',
      rules: Yup.string().required()
    },
    {
      label: '作者',
      name: 'author',
      as: 'input',
      rules: Yup.string().required()
    },
    {
      label: '簡介',
      name: 'description',
      as: 'textarea',
      rules: Yup.string()
    },
  ],
};

const submitHandler = async (values: AddBookPayloadType) => {
  switch(props.formType) {
    case "add":
      await store.addBook(values);
      break;
    case "edit":
    default:
      alert(JSON.stringify(values, null, 2));
  }
}

</script>

<style lang="scss" scoped>
.book-form {
  max-width: 768px;
  margin: 0 auto;
}
</style>