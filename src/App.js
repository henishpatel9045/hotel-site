import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./app.css";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Hero />
      <Products heading={"Choose your favorite"} />
    </Router>
  );
}

export default App;
