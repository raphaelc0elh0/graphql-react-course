import React from 'react'
import { useQuery } from '@apollo/client';
// graphql
import { BOOK } from '../queries/queries'

const BookDetail = (props) => {
  const { loading: queryLoading, error: queryError, data: queryData } = useQuery(BOOK, {
    variables: { id: props.id },
  })

  // returns
  const displayBookDetails = () => {
    if (!props.id) return <p>No book selected yet...</p>
    if (queryLoading) return <p>Loading...</p>
    if (queryError) return <p>Error :(</p>
    const { book } = queryData
    return (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All Books by Author:</p>
        <ul className="other-books">
          {book.author.books.map(book => <li key={book.id}>{book.name}</li>)}
        </ul>
      </div>
    )
  }


  return (
    <div id="book-details">
      {displayBookDetails()}
    </div>
  )
}

export default BookDetail
