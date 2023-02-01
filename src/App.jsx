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
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data";

library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt
);

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path={"/books"} element={<Books book={books} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
