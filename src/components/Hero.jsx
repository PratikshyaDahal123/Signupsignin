import React from 'react';

const Hero = () => {
  const products = [
    {
      img: 'https://assets.wfcdn.com/im/23454794/resize-h600-w600%5Ecompr-r85/2332/233282997/Handmade+Ceramic+Decorative+Plate+1.jpg',
      title: 'TARTARUGHE DECORATIVE PLATE',
      price: 'USD 2,600',
      shipping: 'Ships in 1–2 weeks',
    },
    {
      img: 'data:image/jpeg;base64,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',
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
          <strong>Decor</strong> is more than a shopping destination, it's a journey into the soul of curated beauty and craftsmanship. Inspired by the elegance of timeless design and the warmth of inviting spaces, Decor brings you a handpicked collection of furniture, lighting, and artistic decor pieces. Each item tells a story of tradition, innovation, and the quiet luxury of thoughtful living.
          <br /><br />
          Decor invites you to wander through our digital rooms, explore unique styles, and find pieces that resonate with your vision. Whether you're furnishing a cozy corner or transforming your entire home, our platform makes it simple to fall in love with a piece, <strong>add it to your cart</strong>, and bring it home. You can even personalize selections or contribute your own creative touch, making every space truly yours.
          <br /><br />
          Let Decor be your guide to the art of beautiful living where every purchase is a step into a world of elegance, comfort, and individuality.
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-black mt-10">
          Discover Crafts & Design
        </h2>
      </div>

      {/* Product Showcase Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
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
