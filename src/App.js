import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
              <Link to="About">About</Link>
            </li>
            <li className="page-link">
              <Link to="Shop">Shop</Link>
            </li>
            <li className="page-link">
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Switch>
          H
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Shop} />
          <Route path="/dashboard" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
