import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
// graphql
import { ADD_BOOK, AUTHOR_LIST, BOOK_LIST } from '../queries/queries'

const AddBook = () => {
  // hooks
  const { loading: queryLoading, error: queryError, data: queryData } = useQuery(AUTHOR_LIST)
  const [addBook] = useMutation(ADD_BOOK);

  // states
  const initState = { name: '', genre: '', author_id: '' }
  const [book, setBook] = useState(initState)

  // functions
  const handleChange = (e) => {
    setBook({ ...book, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook({
      variables: { name: book.name, genre: book.genre, author_id: book.author_id },
      refetchQueries: [{ query: BOOK_LIST }]
    })
    setBook(initState)
  }

  // returns
  if (queryLoading) return <p>Loading...</p>;
  if (queryError) return <p>Error :(</p>;
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Book Name</label>
        <input type="text" id="name" value={book.name} onChange={handleChange} />
      </div>
      <div className="field">
        <label htmlFor="genre">Book Genre</label>
        <input type="text" id="genre" value={book.genre} onChange={handleChange} />
      </div>
      <div className="field">
        <label htmlFor="author_id">Book Author</label>
        <select id="author_id" value={book.author_id} onChange={handleChange} >
          <option>Select author...</option>
          {queryData.authors.map(author =>
            <option key={author.id} value={author.id}>{author.name}</option>
          )}
        </select>
      </div>
      <button type="submit">+</button>
    </form>
  )
}

export default AddBook
