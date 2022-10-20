
type BooksType = {
  author: string;
  description: string;
  id: number;
  title: string;
}

type BookType = BooksType

type AddBookPayloadType = {
  author: string;
  description: string;
  title: string;
}