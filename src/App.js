import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Seating from './components/Seating';
import Contact from './components/Contact';
import AboutDecorish from './components/Aboutdecorish';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import BagModal from './components/BagModal';

import Hero from "./components/Hero";
import ProductDetail from "./components/ProductDetail";

import './App.css';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showBagPage, setShowBagPage] = useState(false);

  return (
    <Router>
      <>
        <TopBar />
        <Navbar
          onSignInClick={() => setShowSignIn(true)}
          onBagClick={() => setShowBagPage(true)}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture/seating" element={<Seating />} />
          <Route path="/about" element={<AboutDecorish />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hero" element={<Hero />} />

          {/* Dynamic product detail route */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        <Footer />

        {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
        {showBagPage && <BagModal onClose={() => setShowBagPage(false)} />}
      </>
    </Router>
  );
}

export default App;
