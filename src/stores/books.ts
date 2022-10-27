import { defineStore } from 'pinia'
import requestAPIs from '../request';

const currentBookKey = "currentBookKey";

const getCurrentBookStorage = (): BooksType => {
  return JSON.parse(localStorage.getItem(currentBookKey) as string) || {};
}

export const useBooksStore = defineStore('books', {
  state: () => ({
    books: [] as BooksType[],
    currentBook: getCurrentBookStorage(),
  }),
  actions: {
    async fetchBooks() {
      const result = await requestAPIs.getBooks();
      this.books = result.data;
    },
    setCurrentBookStorage(data: BooksType) {
      localStorage.setItem(currentBookKey, JSON.stringify(data, null, 2));
    },
    async fetchBook(bookId: number) {
      const result = await requestAPIs.getBook(bookId);
      this.currentBook = result.data;
      this.setCurrentBookStorage(result.data);
    },
    getCurrent(bookId: number) {
      if (this.currentBook.id === bookId) return;
      let current = this.books.find(item => item.id === bookId);
      if (current) {
        this.currentBook = current;
        this.setCurrentBookStorage(current);
      } else {
        this.fetchBook(bookId)
      }
    },
    async addBook(payload: BookPayloadType) {
      try {
        const result = await requestAPIs.addBook(payload);
      } catch(err) {}
    },
    async editBook(bookId: number, payload: BookPayloadType) {
      try {
        const result = await requestAPIs.editBook(bookId, payload);
      } catch(err) {}
    },
    async delBook(bookId: number) {
      try {
        const result = await requestAPIs.delBook(bookId);
      } catch(err) {}
    },
  }
})