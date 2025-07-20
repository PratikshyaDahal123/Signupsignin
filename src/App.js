import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Seating from "./components/Seating";
import Contact from "./components/Contact";
import TopBar from './components/TopBar';
import { useState } from 'react';





function App() {

  const [showContact, setShowContact] = useState(false);
  return (
    <Router>
      <TopBar onContactClick={() => setShowContact(true)} />
        {showContact && (<Contact onClose={() => setShowContact(false)} />)}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/furniture/seating" element={<Seating/>} />
      </Routes>
      
    </Router>
  );
}

export default App;