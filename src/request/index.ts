import axios, { AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 15000,
  headers:{'Content-Type':'application/json;charset=utf-8'}
})

service.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

service.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

const requestAPIs = {
  async getBooks(): Promise<AxiosResponse<BooksType[]>> {
    return await service.get("/books");
  },
  async getBook(id: number): Promise<AxiosResponse<BookType>> {
    return await service.get(`/books/${id}`);
  },
  async editBook(data: any) {
    return await service.patch("/books", data);
  },
  async addBook(data: any) {
    return await service.post("/books", data);
  },
  async delBook(id: number) {
    return await service.delete(`/books/${id}`);
  },
}

export default requestAPIs;