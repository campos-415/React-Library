import React from 'react'
import Book from './ui/Book'
import { books } from '../data'

const Discounted = () => {
  return (
    <section id="recents">
      <div className="container">
        <div className="row">
          <h2 className="section__title">Discounted <span className="purple">Books</span></h2>
          <div className="books">
            {books
              .filter(book => book.salePrice !== null)
              .slice(0,4)
              .map((book) => <Book book={book} key={book.id} onClick={book.id} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discounted