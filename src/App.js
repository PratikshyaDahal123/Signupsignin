import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Seating from './components/Seating';
import TopBar from './components/TopBar';
import Contact from './components/Contact';
import AboutDecorish from './components/Aboutdecorish';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture/seating" element={<Seating />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutDecorish />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
