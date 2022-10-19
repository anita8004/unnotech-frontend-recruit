import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/books",
    name: "Books",
    component: () => import("@/pages/Books.vue")
  },
  {
    path: "/books/:id",
    name: "Book",
    component: () => import("@/pages/Book.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;