import React from "react";

const Book = (icon, title, normalPrice) => {
  return (
    <div className="book">
      <a href="/">
        <figure className="book__img--wrapper">
          <img
            src="https://covers.openlibrary.org/b/id/10958382-L.jpg"
            alt=""
            className="book__img"
          />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {title}
        </a>
      </div>
      <div className="book__ratings">
        {icon}
        {icon}
        {icon}
        {icon}
        {icon}
      </div>
      <div className="book__price">
        <span className="book__price--normal">{normalPrice}</span> $10.99
      </div>
    </div>
  );
};

export default Book;
