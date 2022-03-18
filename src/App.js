import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./app.css";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Hero />
    </Router>
  );
}

export default App;
