import { gql } from '@apollo/client';

export const BOOK = gql`
query($id: ID!){
  book(id: $id){
    name
    genre
    id
    author{
      name
      age
      id
      books{
        name
        genre
        id
      }
    }
  }
}
`

export const BOOK_LIST = gql`
{
  books{
    name
    genre
    id
  }
}
`

export const AUTHOR_LIST = gql`
{
  authors{
    name
    id
  }
}
`

export const ADD_BOOK = gql`
mutation($name: String!, $genre: String!, $author_id: ID!){
  addBook(name: $name, genre: $genre, author_id: $author_id){
    name
    genre
    id
  }
}
`