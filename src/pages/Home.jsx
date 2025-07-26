import React, { useState } from "react";
import Hero from "../components/Hero";
import SignIn from "../components/SignIn";
import SignUp from "../components/Signup";
import FurnitureMenu from "../components/FurnitureMenu";
import LightingMenu from "../components/LightingMenu";
import DecorMenu from "../components/DecorMenu";
import TabletopMenu from "../components/TabletopMenu";
import ArtMenu from "../components/ArtMenu";
import LifestyleMenu from "../components/lifestylemenu";
import Aboutdecorish from "../components/Aboutdecorish";
import products from "../components/productdata";
import { Link } from "react-router-dom";

const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [hovered, setHovered] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  const handleSignInContinue = (email) => {
    setUserEmail(email);
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const closeAllModals = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowAbout(false);
  };

  return (
    <div className={showSignIn || showSignUp || showAbout ? "overflow-hidden h-screen" : ""}>
      {/* Sticky Category Bar */}
      <div className="sticky top-0 z-30 bg-white shadow-sm">
        <div className="flex justify-center gap-10 py-4 border-b font-medium text-sm tracking-wider uppercase relative">
          {[
            { label: "Furniture", component: <FurnitureMenu />, key: "furniture" },
            { label: "Lighting", component: <LightingMenu />, key: "lighting" },
            { label: "Decor", component: <DecorMenu />, key: "decor" },
            { label: "Tabletop", component: <TabletopMenu />, key: "tabletop" },
            { label: "Art", component: <ArtMenu />, key: "art" },
            { label: "Lifestyle", component: <LifestyleMenu />, key: "lifestyle" },
          ].map(({ label, component, key }) => (
            <div
              key={key}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              className="bg-white"
            >
              <div className="cursor-pointer">{label}</div>
              {hovered === key && (
                <div
                  className="absolute top-12 left-0 w-screen bg-white shadow-md z-20"
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="mx-auto w-full max-w-[1800px] px-10">
                    {component}
                  </div>
                </div>
              )}
            </div>
          ))}
          <span>Inspiration</span>
          <span>Magazine</span>
          <span>Artisans</span>
        </div>
      </div>

      {showAbout && <Aboutdecorish onClose={() => setShowAbout(false)} />}

      <Hero />

      {/* Products List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="text-center">
            <img src={product.image} alt={product.title} className="w-full h-auto object-cover mb-2" />
            <p className="text-sm font-medium">{product.title}</p>
          </Link>
        ))}
      </div>

      {showSignIn && (
        <SignIn onClose={closeAllModals} onContinue={handleSignInContinue} />
      )}
      {showSignUp && <SignUp email={userEmail} onBack={closeAllModals} />}
    </div>
  );
};

export default Home;
