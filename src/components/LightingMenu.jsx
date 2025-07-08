import React from 'react';

const LightingMenu = () => {
  return (
    <div className="w-full bg-white px-20 py-12 shadow-lg">
      <div className="grid grid-cols-2 gap-16 text-gray-800 max-w-screen-xl mx-auto">
        {/* Lighting Types */}
        <div>
          <h3 className="text-lg font-semibold mb-4">LIGHTING</h3>
          <ul className="space-y-2 text-sm">
            <li>Ceiling Lamps</li>
            <li>Chandeliers</li>
            <li>Desk Lamps</li>
            <li>Floor Lamps</li>
            <li>Pendant Lighting</li>
            <li>Portable Lamps</li>
            <li>Wall Lights Sconces</li>
            <li>Table Lamps</li>
            <li>Outdoor Lighting</li>
          </ul>
        </div>

        {/* Shop by Collection */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SHOP BY COLLECTION</h3>
          <ul className="space-y-2 text-sm">
            <li>Brass Wall Lamps</li>
            <li>Colorful Pendant Lighting</li>
            <li>Ring Chandeliers</li>
            <li>Sculptural Lighting</li>
            <li>Contemporary Glass Table Lamps</li>
            <li>Waterfall Chandeliers</li>
            <li>Venetian Chandeliers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LightingMenu;
