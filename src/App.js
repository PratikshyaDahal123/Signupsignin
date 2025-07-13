import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Seating from "./components/Seating";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/furniture/seating" element={<Seating/>} />
      </Routes>
      
    </Router>
  );
}

export default App;