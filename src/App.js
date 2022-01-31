import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
