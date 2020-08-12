import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="top-nav">
              <Link className="top-link" to="/">Home</Link>
              <Link className="top-link" to="/my-profile">My Profile</Link>
              <Link className="top-link" to="/about-us">About Us</Link>
          </div>
          <switch>
            <Route path="/about-us" component={About}/>
            <Route path="/my-profile" component={Profile}/>
            <Route exact path="/" component={Home}/>
          </switch>
        </Router>
      </div>
    );
  }
}

export default App;
