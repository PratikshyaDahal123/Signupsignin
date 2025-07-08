import React from 'react';

const DecorMenu = () => {
  return (
    <div className="w-full bg-white px-20 py-12 shadow-lg">
      <div className="grid grid-cols-4 gap-16 text-gray-800 max-w-screen-xl mx-auto">
        {/* VASES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">VASES</h3>
          <ul className="space-y-2 text-sm">
            <li>Amphoras</li>
            <li>Cachepots & Vase Holders</li>
            <li>Decorative Bottles</li>
            <li>Decorative Vases</li>
            <li>Figurative Vases</li>
            <li>Flower Vases</li>
            <li>Vases with Lids</li>
            <li className="mt-4 font-semibold">MIRRORS</li>
            <li>Floor Mirrors</li>
            <li>Tabletop Mirrors</li>
            <li>Wall Mirrors</li>
          </ul>
        </div>

        {/* DECORATIVE OBJECTS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">DECORATIVE OBJECTS</h3>
          <ul className="space-y-2 text-sm">
            <li>Candlesticks & Candle Holders</li>
            <li>Centerpieces</li>
            <li>Decorative Plates</li>
            <li>Decorative Sculptures</li>
            <li>Figurines</li>
            <li className="mt-4 font-semibold">TEXTILES</li>
            <li>Bath Linen</li>
            <li>Bedding</li>
            <li>Blankets</li>
            <li>Cushions</li>
          </ul>
        </div>

        {/* RUGS & CARPETS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">RUGS & CARPETS</h3>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">WALLPAPERS</li>
            <li className="font-semibold">WALL DECOR</li>
            <li>Decorative Panels</li>
            <li>Wall Sculptures</li>
            <li className="mt-4 font-semibold">BUILDING ELEMENTS</li>
            <li>Handles</li>
            <li>Tiles & Floor Surfaces</li>
            <li>Washbasins & Bathtubs</li>
          </ul>
        </div>

        {/* BOXES & CASES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">BOXES & CASES</h3>
          <ul className="space-y-2 text-sm">
            <li>Baskets</li>
            <li>Boxes</li>
            <li>Jewelry Boxes</li>
            <li className="mt-4 font-semibold">OTHER DECOR</li>
            <li>Bathroom Decor</li>
            <li>Clocks</li>
            <li>Frames</li>
            <li>Holiday Decorations</li>
            <li>Magazine Racks</li>
            <li>Umbrella Holders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DecorMenu;
