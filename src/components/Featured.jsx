import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Book from './ui/Book'

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            <Book 
              icon={<FontAwesomeIcon icon="star" />}
              title="Atomic Habits"
              normalPrice="$15.99"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured