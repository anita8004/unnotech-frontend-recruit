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
  console.log("Method: ", response.config.method)
  switch(response.config.method) {
    case "post":
    case "put":
    case "delete":
    case "patch":
      alert("Success!");
      break;
    default:
  }
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
  async editBook(id: number, data: BookPayloadType) {
    return await service.patch(`/books/${id}`, data);
  },
  async addBook(data: BookPayloadType) {
    return await service.post("/books", data);
  },
  async delBook(id: number) {
    return await service.delete(`/books/${id}`);
  },
}

export default requestAPIs;