import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import { data, data2 } from "./components/Products/data";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Hero />
      <Products heading={"Choose your favorite"} data={data} />
      <Feature />
      <Products heading={"Sweet Treats"} data={data2} />
      <Footer />
    </Router>
  );
}

export default App;
