import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Products from './Products';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="top-nav">
              <Link className="top-link" to="/">Home</Link>
              <Link className="top-link" to="/Products">Products</Link>
              <Link className="top-link" to="/my-profile">My Profile</Link>
              <Link className="top-link" to="/about-us">About Us</Link>
          </div>
          <Switch>
            <Route exact path="/about-us" component={About}/>
            <Route exact path="/my-profile" component={Profile}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/products/:id" component={Product}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/goods" component={Products}/>
            <Route path="/*" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
