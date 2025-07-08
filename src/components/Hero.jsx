import React from 'react';

const Hero= () => (  
  <div className="relative h-[80vh] w-full overflow-hidden">
    <img
      src="https://www.spiffyspools.com/wp-content/uploads/2023/09/13_-Invest-In-Quality-Items-Minimalist-Living-Room-Design-1536x979.jpeg"
      alt="Hero"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
      <p className="text-sm tracking-widest mb-2">TRADE</p>
      <h1 className="text-4xl font-serif text-center px-4">
        Welcome to Decorish Trade Program
      </h1>
    </div>
  </div>
);

export default Hero;
