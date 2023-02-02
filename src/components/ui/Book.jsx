import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Book = ({book}) => {

  function showSelectedBook(event) {
    console.log(event)
  }


  return (
    <div className="book">
      <Link to={`/books/${book.id}`} >
        <figure className="book__img--wrapper">
          <img
            src={book.url}
            alt=""
            className="book__img"
          />
        </figure>
      </Link>
      <div className="book__title">
        <Link  to={`/books/${book.id}`} onClick={(event) => showSelectedBook(event)} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
    </div>
  );
};

export default Book;
