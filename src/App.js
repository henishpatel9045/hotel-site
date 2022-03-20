import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";

function App() {
  return (
    <Router>
      <Hero />
      <Products heading={"Choose your favorite"} />
      <Feature />
    </Router>
  );
}

export default App;
