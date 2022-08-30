import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to my Page!</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> {Home }</Link></li>
            <li><Link to={'/contact'} className="nav-link">{Contact}</Link></li>
            <li><Link to={'/about'} className="nav-link">{About}</Link></li>
          </ul> 
          </nav>
          <hr />
          <Routes >
            <Route exact path='/' element={Home} />
            <Route path='/contact' element={Contact} />
            <Route path='/about' element={About} />
          </Routes >
        </div>
      </Router>
    );
  }
}

export default App;