import { defineStore } from 'pinia'
import requestAPIs from '../request';

export const useBooksStore = defineStore('books', {
  state: () => ({
    books: [] as BooksType[],
    currentBook: {} as BooksType,
  }),
  actions: {
    async fetchBooks() {
      const result = await requestAPIs.getBooks();
      this.books = result.data;
    },
    async fetchBook(bookId: number) {
      const result = await requestAPIs.getBook(bookId);
      this.currentBook = result.data;
    },
    getCurrent(bookId: number) {
      let current = this.books.find(item => item.id === bookId);
      if (current) {
        this.currentBook = current
      } else {
        this.fetchBook(bookId)
      }
    },
  }
})