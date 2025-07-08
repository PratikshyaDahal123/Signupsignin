import React from 'react';

const TabletopMenu = () => {
  return (
    <div className="w-full bg-white px-20 py-12 shadow-lg">
      <div className="grid grid-cols-4 gap-16 text-gray-800 max-w-screen-xl mx-auto">
        {/* PLATES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">PLATES</h3>
          <ul className="space-y-2 text-sm">
            <li>Bowls</li>
            <li>Charger Plates</li>
            <li>Dessert Plates</li>
            <li>Dinner Plates</li>
            <li>Dining Sets</li>
            <li>Soup Plates</li>
            <li className="mt-4 font-semibold">FLATWARE</li>
            <li>Flatware Sets</li>
            <li>Kitchen Knives</li>
            <li>Serving Utensils</li>
          </ul>
        </div>

        {/* GLASSES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">GLASSES</h3>
          <ul className="space-y-2 text-sm">
            <li>Cocktail & Spirits Glasses</li>
            <li>Drinking Glasses & Tumblers</li>
            <li>Flutes</li>
            <li>Glassware Sets</li>
            <li>Wine Glasses</li>
            <li className="mt-4 font-semibold">TABLE LINEN</li>
            <li>Napkins</li>
            <li>Placemats</li>
            <li>Runners</li>
            <li>Tablecloths</li>
          </ul>
        </div>

        {/* SERVEWARE */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SERVEWARE</h3>
          <ul className="space-y-2 text-sm">
            <li>Appetizer Serveware</li>
            <li>Cake Stands</li>
            <li>Serving Bowls & Baskets</li>
            <li>Serving Platters</li>
            <li>Trays</li>
            <li className="mt-4 font-semibold">KITCHENWARE</li>
            <li>Cookware</li>
            <li>Cutting Boards</li>
            <li>Jars</li>
            <li>Kitchen Accessories</li>
          </ul>
        </div>

        {/* TABLETOP ACCESSORIES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">TABLETOP ACCESSORIES</h3>
          <ul className="space-y-2 text-sm">
            <li>Bar Accessories</li>
            <li>Coasters</li>
            <li>Decanters & Pitchers</li>
            <li>Ice Buckets & Wine Coolers</li>
            <li>Napkin Holders & Placeholder</li>
            <li>Oil & Vinegar Holders</li>
            <li>Salt & Pepper Shakers</li>
            <li className="mt-4 font-semibold">TEA & COFFEE ACCESSORIES</li>
            <li>Teapots & Coffee Makers</li>
            <li>Coffee & Tea Cups</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabletopMenu;
