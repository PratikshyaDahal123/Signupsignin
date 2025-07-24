import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Seating from './components/Seating';
import Contact from './components/Contact';
import AboutDecorish from './components/Aboutdecorish';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture/seating" element={<Seating />} />
          <Route path="/about" element={<AboutDecorish />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
