<template>
  <DynamicForm
    class="book-form"
    :schema="formSchema"
    :formType="formType"
    :initialValues="initialValues"
    @submit="submitHandler"
  />
</template>

<script setup lang="ts">
import DynamicForm from '@/components/form/DynamicForm.vue';
import { computed, PropType } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import * as Yup from 'yup';
import { routesName } from '../../router';
import { useBooksStore } from '../../stores/books';

const route = useRoute();
const router = useRouter();
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

if (props.formType === "edit" && route.params.id) {
  await store.getCurrent(Number(route.params.id));
}

const bookInfo = computed(() => store.currentBook);
const initialValues = computed(() => {
  if (props.formType === "add") return {};
  return {
    title: store.currentBook.title,
    author: store.currentBook.author,
    description: store.currentBook.description
  };
});

const submitHandler = async (values: BookPayloadType) => {
  switch(props.formType) {
    case "add":
      await store.addBook(values);
      router.replace({name: routesName.books});
      break;
    case "edit":
      await store.editBook(bookInfo.value.id, values);
      await store.fetchBook(bookInfo.value.id);
      router.replace({name: routesName.book, params: {id: bookInfo.value.id}});
      break;
    default:
  }
}

</script>

<style lang="scss" scoped>
.book-form {
  max-width: 768px;
  margin: 0 auto;
}
</style>