import Nav from "./components/Nav.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faBolt,
  faBookOpen,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faTags,
  faTimes,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { useEffect, useState } from "react";

library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft
);

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
    console.log(+quantity);
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id))

  }

  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" exact element={<Books books={books} />} />
            <Route
              path="/books/:id"
              element={
                <BookInfo books={books} addToCart={addToCart} cart={cart} />
              }
            />
            <Route
              path="/cart/"
              element={
                <Cart
                  books={books}
                  cart={cart}
                  changeQuantity={changeQuantity}
                  removeItem={removeItem}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
