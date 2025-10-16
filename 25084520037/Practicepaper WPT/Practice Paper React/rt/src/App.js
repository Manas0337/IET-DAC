import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import RandomDataFetcher from './RandomDataFetcher';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/Counter">Counter</Link> |{' '}
        <Link to="/Home">Home</Link> |{' '}
        <Link to="/Contactus">Contactus</Link> |{' '}
        <Link to="/Aboutus">About Us</Link> |{' '}
        <Link to="/RandomDataFetcher">Axios</Link>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/RandomDataFetcher" element={<RandomDataFetcher />} />
      </Routes>
    </Router>
  );
}

export default App;
