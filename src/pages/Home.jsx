import React, { useState } from 'react';
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SignIn from "../components/SignIn";
import SignUp from "../components/Signup";
import FurnitureMenu from "../components/FurnitureMenu";
import LightingMenu from "../components/LightingMenu";
import DecorMenu from "../components/DecorMenu";
import TabletopMenu from "../components/TabletopMenu";
import ArtMenu from "../components/ArtMenu";
import LifestyleMenu from "../components/lifestylemenu";

const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [hovered, setHovered] = useState(null);

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

      <div className="relative z-30">
        <div className="flex justify-center gap-10 py-4 border-b font-medium text-sm tracking-wider uppercase bg-white">
          <div
            onMouseEnter={() => setHovered('furniture')}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="cursor-pointer">Furniture</span>
          </div>

          <div
            onMouseEnter={() => setHovered('lighting')}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="cursor-pointer">Lighting</span>
          </div>

          <div
            onMouseEnter={() => setHovered('decor')}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="cursor-pointer">Décor</span>
          </div>

          <div
            onMouseEnter={() => setHovered('tabletop')}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="cursor-pointer">Tabletop</span>
          </div>

          <div
            onMouseEnter={() => setHovered('art')}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="cursor-pointer">Art</span>
          </div>

          <div
            onMouseEnter={() => setHovered('lifestyle')}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="cursor-pointer">Lifestyle</span>
          </div>

          <span>Inspiration</span>
          <span>Magazine</span>
          <span>Artisans</span>
        </div>

        {hovered === 'furniture' && (
          <div
            className="absolute top-full left-0 w-full z-20"
            onMouseEnter={() => setHovered('furniture')}
            onMouseLeave={() => setHovered(null)}
          >
            <FurnitureMenu />
          </div>
        )}

        {hovered === 'lighting' && (
          <div
            className="absolute top-full left-0 w-full z-20"
            onMouseEnter={() => setHovered('lighting')}
            onMouseLeave={() => setHovered(null)}
          >
            <LightingMenu />
          </div>
        )}

        {hovered === 'decor' && (
          <div
            className="absolute top-full left-0 w-full z-20"
            onMouseEnter={() => setHovered('decor')}
            onMouseLeave={() => setHovered(null)}
          >
            <DecorMenu />
          </div>
        )}

        {hovered === 'tabletop' && (
          <div
            className="absolute top-full left-0 w-full z-20"
            onMouseEnter={() => setHovered('tabletop')}
            onMouseLeave={() => setHovered(null)}
          >
            <TabletopMenu />
          </div>
        )}

        {hovered === 'art' && (
          <div
            className="absolute top-full left-0 w-full z-20"
            onMouseEnter={() => setHovered('art')}
            onMouseLeave={() => setHovered(null)}
          >
            <ArtMenu />
          </div>
        )}

        {hovered === 'lifestyle' && (
          <div
            className="absolute top-full left-0 w-full z-20"
            onMouseEnter={() => setHovered('lifestyle')}
            onMouseLeave={() => setHovered(null)}
          >
            <LifestyleMenu />
          </div>
        )}
      </div>

      <Hero />

      {showSignIn && <SignIn onClose={closeAllModals} onContinue={handleSignInContinue} />}
      {showSignUp && <SignUp email={userEmail} onBack={closeAllModals} />}
    </div>
  );
};

export default Home;
