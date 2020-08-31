import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import BookDetails from "./components/BookDetails";
import Book from "./components/Book";
import Home from "./components/Home";
import OrderedBooks from "./components/OrderedBook";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="navBar">

     
      <div className="Header">
    <h3>eCommerce Site</h3>
      </div>
      <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
         {"|"}
        </li>
        <li>
          <Link to="/orderedList">My Ordered</Link>
        </li>
        <li>
         {"|"}
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      </div>
      </div>
      

      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/bookDetails/:id" component={BookDetails} />
        <Route exact path="/orderedList" component={OrderedBooks} />
        <Route exact path="/cart" component={Cart} />
        
      </div>
    </Router>
  );
}

export default App;
