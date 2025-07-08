import React from 'react';

const LifestyleMenu = () => {
  return (
    <div className="w-full bg-white px-20 py-12 shadow-lg">
      <div className="grid grid-cols-3 gap-16 text-gray-800 max-w-screen-xl mx-auto">
        {/* AUDIO & TECH GAMES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">AUDIO & TECH GAMES</h3>
          <ul className="space-y-2 text-sm">
            <li>Board Games</li>
            <li>Gaming Tables</li>
            <li>Umbrellas</li>
            <li>Candles</li>
            <li>Coffee Table Books</li>
            <li>Grooming</li>
          </ul>
        </div>

        {/* SPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SPORT</h3>
          <ul className="space-y-2 text-sm">
            <li>Sport Accessories</li>
            <li>Sport Bags</li>
            <li>Travel Accessories</li>
            <li>Luggages</li>
            <li>Vanity Cases</li>
            <li>Weekend Bags</li>
          </ul>
        </div>

        {/* OFFICE ACCESSORIES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">OFFICE ACCESSORIES</h3>
          <ul className="space-y-2 text-sm">
            <li>Desk Accessories</li>
            <li>Notebooks</li>
            <li>Pens & Stationery</li>
            <li>Photo Albums</li>
            <li>Smoking Accessories</li>
            <li>Shoehorns</li>
            <li>Walking Sticks</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LifestyleMenu;
