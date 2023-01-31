import Nav from "./components/Nav.jsx";
import Landing from "./components/Landing.jsx";
import Highlights from "./components/Highlights.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBolt, faBookOpen, faShoppingCart, faStar, faStarHalfAlt, faTags, faTimes } from "@fortawesome/free-solid-svg-icons";
import Featured from "./components/Featured.jsx";

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt )

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </>
  );
}

export default App;
