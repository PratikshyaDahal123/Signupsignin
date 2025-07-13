import React, { useState } from 'react';
import { Heart, FileText } from 'lucide-react';

const Hero = () => {
  const [touchedIconIndex, setTouchedIconIndex] = useState(null);
  const [tooltipType, setTooltipType] = useState(null);

  const handleIconTouch = (index, type) => {
    setTouchedIconIndex(index);
    setTooltipType(type);
    setTimeout(() => {
      setTouchedIconIndex(null);
      setTooltipType(null);
    }, 2000); // Hide after 2 seconds
  };

  const products = [
    {
      img: 'https://assets.wfcdn.com/im/23454794/resize-h600-w600%5Ecompr-r85/2332/233282997/Handmade+Ceramic+Decorative+Plate+1.jpg',
      title: 'TARTARUGHE DECORATIVE PLATE',
      price: 'USD 2,600',
      shipping: 'Ships in 1–2 weeks',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKfnU7zC_sAjzvQqkiaTFGpkz8U0aIWjGVJabE8UFqE7EsqEcG0v0wmSPJS_4gk6ZQ0&usqp=CAU',
      title: 'PIANETA CERAMIC VASE',
      price: 'USD 1,200',
      shipping: 'Ships in 3–5 days',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0653/7697/7075/files/6905_LEVAGE-008-A20150826-6808-15nrs9w_2696cedc-aef4-4206-b9e0-9e827cd2bb62.jpg?width=512',
      title: 'CAMPANINO 900 BEECHWOOD',
      price: 'USD 950',
      shipping: 'Ships in 1 week',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4gCtXllAM8UHqRvDpaXBxfjhzhSeroRlUHXnn15hZW3535uEqC24pdwB_IZjXBQZQhY&usqp=CAU',
      title: 'VELVET BICOLOR HIGH VASE',
      price: 'USD 1,780',
      shipping: 'Ships in 2–3 weeks',
    },
    {
      img: 'https://armeniakos.gr/wp-content/uploads/2024/06/planet-3.png',
      title: 'JUPITER PLANET HIGH COFFEE TABLE',
      price: 'USD 1,780',
      shipping: 'Ships in 2–3 weeks',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjYQdhjG1xTe8zJLQWiSQuk7-JGV3sG_fyQ&s',
      title: 'TRE ANSE CERAMIC TEAPOT',
      price: 'USD 1,780',
      shipping: 'Ships in 2–3 weeks',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDY2yBWumg69NYVh9eI_W8ONwUFE63wAK1tGFX6a2oPBXjvyN505UWknebjRKtKn3nPQ&usqp=CAU',
      title: 'iRON FLOWERS CHANDELIER',
      price: 'USD 1,780',
      shipping: 'Ships in 2–3 weeks',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDzTdNgSGEnjO9oqZqZ-zCKqwVF_jEYLo9pWObJHckZEOXd-vprIClatZJmFVCBRO58o&usqp=CAU',
      title: 'WALL WALLPAPER',
      price: 'USD 1,780',
      shipping: 'Ships in 2–3 weeks',
    },
    {
      img: 'https://i.pinimg.com/236x/f3/51/10/f3511025317b6a80387517512a64fc5a.jpg',
      title: 'ABSTRACT CERAMICS',
      price: 'USD 1,780',
      shipping: 'Ships in 2–3 weeks',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="https://www.spiffyspools.com/wp-content/uploads/2023/09/13_-Invest-In-Quality-Items-Minimalist-Living-Room-Design-1536x979.jpeg"
          alt="Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center px-4">
          <p className="text-sm tracking-widest mb-2">TRADE</p>
          <h1 className="text-4xl md:text-5xl font-serif">
            Welcome to Decorish Trade Program
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-lg text-gray-900 leading-8 font-light">
          <strong>Decor</strong> is more than a shopping destination, it's a journey into the soul of curated beauty and craftsmanship...
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-black mt-10">
          Discover Crafts & Design
        </h2>
      </div>

      {/* Product Showcase */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden relative group">
            <div className="overflow-hidden relative">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              {/* Icon Buttons */}
              <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Heart Icon */}
                <div className="relative">
                  <Heart
                    className="w-5 h-5 text-yellow-400 hover:text-red-500 cursor-pointer"
                    onTouchStart={() => handleIconTouch(index, 'wishlist')}
                  />
                  <span
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded z-10 whitespace-nowrap transition-opacity duration-200 ${
                      (tooltipType === 'wishlist' && touchedIconIndex === index) ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Add to wishlist
                  </span>
                </div>

                {/* File Icon */}
                <div className="relative">
                  <FileText
                    className="w-5 h-5 text-yellow-400 hover:text-yellow-500 cursor-pointer"
                    onTouchStart={() => handleIconTouch(index, 'list')}
                  />
                  <span
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded z-10 whitespace-nowrap transition-opacity duration-200 ${
                      (tooltipType === 'list' && touchedIconIndex === index) ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Add to list
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">{product.title}</h3>
              <p className="text-sm text-gray-700">{product.price}</p>
              <p className="text-xs text-gray-500 mt-1">{product.shipping}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
