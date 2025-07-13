import React from 'react';
import { Link } from 'react-router-dom';

const FurnitureMenu = () => {
  return (
    <div className="w-full bg-white px-20 py-12 shadow-lg">
      <div className="grid grid-cols-4 gap-16 text-gray-800 max-w-screen-xl mx-auto">
        {/* SEATING */}
        <div>
          <Link
            to="/furniture/seating"
            className="text-lg font-semibold mb-4 inline-block hover:underline text-black"
          >
            SEATING
          </Link>
          <ul className="space-y-2 text-sm">
            <li>Armchairs</li>
            <li>Bar Stools</li>
            <li>Benches</li>
            <li>Chairs</li>
            <li>Chaises</li>
            <li>Lounge Chairs</li>
            <li>Office Chairs</li>
            <li>Ottomans & Poufs</li>
            <li>Sofas</li>
            <li>Stools</li>
          </ul>
        </div>

        {/* TABLES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">TABLES</h3>
          <ul className="space-y-2 text-sm">
            <li>Bistro Tables</li>
            <li>Coffee Tables</li>
            <li>Consoles</li>
            <li>Desk & Writing Tables</li>
            <li>Dining Tables</li>
            <li>Nesting Tables</li>
            <li>Nightstands</li>
            <li>Serving Tables</li>
            <li>Side Tables</li>
            <li>Vanities</li>
          </ul>
        </div>

        {/* STORAGE */}
        <div>
          <h3 className="text-lg font-semibold mb-4">STORAGE</h3>
          <ul className="space-y-2 text-sm">
            <li>Bar Cabinets</li>
            <li>Bookcases</li>
            <li>Cabinets</li>
            <li>Dressers</li>
            <li>Shelves</li>
            <li>Sideboards & Buffets</li>
            <li>Trunks</li>
            <li>Other Furniture</li>
            <li>Beds</li>
            <li>Coat Stands</li>
            <li>Room Dividers</li>
          </ul>
        </div>

        {/* OUTDOOR FURNITURE */}
        <div>
          <h3 className="text-lg font-semibold mb-4">OUTDOOR FURNITURE</h3>
          <ul className="space-y-2 text-sm">
            <li>Outdoor Armchairs</li>
            <li>Outdoor Chairs & Stools</li>
            <li>Outdoor Chaises & Daybeds</li>
            <li>Outdoor Coffee Tables</li>
            <li>Outdoor Dining Tables</li>
            <li>Outdoor Sofas & Benches</li>
            <li>Other Outdoor Furniture</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FurnitureMenu;
