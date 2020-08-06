import React from 'react'
import { useQuery } from '@apollo/client';
// components
import BookDetail from './BookDetail';
// graphql
import { BOOK_LIST } from '../queries/queries'
import { useState } from 'react';

const BookList = () => {
  const { loading, error, data } = useQuery(BOOK_LIST);
  const [clickedBook, setClickedBook] = useState()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <ul id="book-list">
        {data.books.map(book =>
          <li key={book.id} onClick={(e) => setClickedBook(book.id)}>{book.name}, {book.genre}</li>
        )}
      </ul>
      <BookDetail id={clickedBook} />
    </div>
  )
}

export default BookList
