import Home from "./components/Home";
import Characters from "./components/Characters";
import NavbarComp from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Merchandise from "./components/Merchandise";
import Videos from "./components/Videos";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
