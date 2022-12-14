import { createRouter, createWebHistory } from 'vue-router'

export const routesName = {
  books: "Books",
  book: "Book",
  editBook: "EditBook",
  addBook: "AddBook",
}

const routes = [
  {
    path: "/books",
    name: routesName.books,
    component: () => import("@/pages/Books.vue")
  },
  {
    path: "/books/:id",
    name: routesName.book,
    props: true,
    component: () => import("@/pages/Book.vue")
  },
  {
    path: "/books/add",
    name: routesName.addBook,
    props: true,
    component: () => import("@/pages/AddBook.vue")
  },
  {
    path: "/books/edit/:id",
    name: routesName.editBook,
    props: true,
    component: () => import("@/pages/EditBook.vue")
  },
  {
    path: "/",
    redirect: () => ({
      path: "/books",
      name: routesName.books,
      component: () => import("@/pages/Books.vue")
    })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;