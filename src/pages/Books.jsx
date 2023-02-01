import React, { useState } from "react";
import Book from "../components/ui/Book";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);
  function filterBooks(filter) {
    if (filter === "LOW__TO__HIGH") {
      setBooks(
        books.map((books) => {
          <Book book={books} />;
        })
      );
    }
    console.log(filter);
  }
  return (
    <div className="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  name=""
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW__TO__HIGH">Price, Low to High</option>
                  <option value="HIGH__TO__LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
