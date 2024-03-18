import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import "./About.js";
import "./Shop.js";
import Shop from "./Shop.js";
import About from "./About.js";
import Contact from "./Contact.js";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <header className="App-header">
            <h1>Welcome to Baby's Kitchen!</h1>
          </header>
        </div>
        <div className="Body">
          <ul className="Body-ul">
            <li className="page-link">
              <Link to="/">Home</Link>
            </li>
            <li className="page-link">
              <Link to="About.js">About</Link>
            </li>
            <li className="page-link">
              <Link to="Shop.js">Shop</Link>
            </li>
            <li className="page-link">
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" component={App} />
          <Route path="/About" component={About} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
