import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Price from '../components/ui/Price'
import Rating from '../components/ui/Rating'

const BookInfo = ({ books:initialBooks, showSelectedBook }) => {

  return (
    
    <div id="books__body">
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className='book__link'>
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className='book__link'>
                <h2 className='book__selected--title--top'>Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src="https://covers.openlibrary.org/b/id/10088428-L.jpg" alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">Deep Work</h2>
                <Rating rating="4"/>
                <Price originalPrice={12} salePrice={10} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BookInfo