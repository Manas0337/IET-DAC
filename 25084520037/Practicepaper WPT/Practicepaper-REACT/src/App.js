import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/Aboutus';
import ContactUs from './Components/Contactus';
import Counter from './Components/Counter';
import DataFetcher from './Components/axios';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About Us</Link> |{' '}
        <Link to="/contact">Contact Us</Link> |{' '}
        <Link to="/counter">Counter</Link> |{' '}
        <Link to="/axios">Data Fetcher</Link>
      </nav>

      
    </Router>
  );
}

export default App;
