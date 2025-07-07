import React, { useState } from 'react';
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SignIn from "../components/SignIn";
import SignUp from "../components/Signup";

const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSignInContinue = (email) => {
    setUserEmail(email);
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const closeAllModals = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <div className={showSignIn || showSignUp ? 'overflow-hidden h-screen' : ''}>
      <TopBar />
      <Navbar onSignInClick={() => setShowSignIn(true)} />

      <div className="flex justify-center gap-10 py-4 border-b font-medium text-sm tracking-wider uppercase">
        <span>Furniture</span>
        <span>Lighting</span>
        <span>Décor</span>
        <span>Tabletop</span>
        <span>Art</span>
        <span>Lifestyle</span>
        <span>Inspiration</span>
        <span>Magazine</span>
        <span>Artisans</span>
      </div>

      <Hero />

      {showSignIn && <SignIn onClose={closeAllModals} onContinue={handleSignInContinue} />}
      {showSignUp && <SignUp email={userEmail} onBack={closeAllModals} />}
    </div>
  );
};

export default Home;
