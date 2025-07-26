import React, { useState } from 'react';
import { Heart, FileText } from 'lucide-react';
import {useNavigate} from 'react-router-dom';


const isAuthenticated = false;

const Hero = () => {
  const [touchedIconIndex, setTouchedIconIndex] = useState(null);
  const [tooltipType, setTooltipType] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = true;
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
    {
      img: 'data:image/jpeg;base64,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',
      title: 'Mirror',
      price: 'USD 1,780',
      shipping: 'Ships in 2–3 weeks',
    },
    {
      img: 'https://rusticreddoor.com/cdn/shop/files/Dixon-mid-century-modern-cabinet.webp?v=1738943538',
      title: 'CABINET',
      price: 'USD 1,780',
      shipping: 'Ships in 2–3 weeks',
    },
    {
      img: 'data:image/jpeg;base64,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',
      title: 'DRAWER',
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
          <strong>Decor</strong> Discover the Essence of Decor – Where Design Meets Culture

          Decor is not just a brand it is a mood, a memory, a manifestation of history carved into wood, fabric, and form. Born from the haunting beauty of coastal cliffs and ancient stone towns, Decor channels the raw elegance of nature and the soul of timeworn traditions.

          Each piece tells a story not just of where it was made, but of who shaped it. Our collections echo centuries of Mediterranean artistry, where every curve, every texture, is a deliberate act of meaning. Nothing is accidental. Everything is intentional.

          Decor is for those who crave more than beauty for those who seek presence. A space not just filled, but felt. Here, silence speaks, shadows play, and materials breathe.
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
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => navigate("/product/tartarughe-decorative-plate")}
              />
              
              {/* Icon Buttons */}
              <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Heart Icon */}
                <div className="relative">
                  <Heart
                    className="w-5 h-5 text-yellow-400 hover:text-red-500 cursor-pointer"
                    onTouchStart={() => {
                      if (!isAuthenticated) {
                        navigate("/signin");
                        return;
                      }
                      handleIconTouch(index, 'wishlist');
                    }}
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
                    onTouchStart={() => {
                      if (!isAuthenticated) {
                      navigate("/signin");
                      return;
                      }
                      handleIconTouch(index, 'list');
                    }}

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
      {/* What Inspires Us Paragraph */}
      <div className="max-w-5xl mx-auto text-gray-800 text-base leading-relaxed">
        <h2 className="text-2xl font-semibold mb-6 text-black">What Inspires Us</h2>

        <p className="mb-4">
          <strong>Flower Coast (Inspired by Riviera dei Fiori)</strong> – Imagine a coast full of colorful flowers, sunshine, and fresh air. This beautiful place along the Italian seaside inspires our floral designs, soft colors, and natural textures—bringing a feeling of freshness and charm to every corner of your home.
        </p>
        <p className="mb-4">
          <strong>Historic City Vibes (Inspired by Genova)</strong> – Inspired by old European cities with narrow streets and grand palaces, our collection reflects timeless beauty. From classic patterns to vintage touches, every detail is designed to add a sense of history and elegance to your space.
        </p>
        <p className="mb-4">
          <strong>Coastal Charm (Inspired by Portofino & Tigullio)</strong> – Calm, cozy seaside towns with colorful houses and peaceful beaches inspire our use of light colors, wood finishes, and hand-crafted details. These pieces are perfect for creating a relaxed and stylish home.
        </p>
        <p className="mb-4">
          <strong>Hillside Homes (Inspired by Cinque Terre)</strong> – These five small towns built on cliffs above the sea give us ideas for playful patterns, natural materials, and earthy tones. Our designs bring the cozy, rustic feel of these villages into modern homes.
        </p>
        <p>
          <strong>Poet’s Bay (Inspired by Golfo dei Poeti)</strong> – A place once loved by famous writers and artists, it inspires our most peaceful designs. Soft lighting, simple shapes, and calming colors help create quiet spaces where you can relax and feel at home.
        </p>
      </div>
      
  {/* Side-by-side images */}
<div className="mt-10 flex justify-center gap-6">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukPVkUAtgzA2FKW5sXJmt4AdChRfT8FYPsI2ZTIcWEE8Sox2hFCqykEa3pOelMy5HwR4&usqp=CAU"
    alt="Craft Image 1"
    className="w-1/2 h-auto object-cover rounded-lg shadow-md"
  />
  <img
    src="https://www.shutterstock.com/image-photo/male-carpenter-work-close-260nw-340447322.jpg" // Replace with actual path if using locally
    alt="Craft Image 2"
    className="w-1/2 h-auto object-cover rounded-lg shadow-md"
  />
</div>
{/* Paragraph Section */}
  <div className="text-gray-800 text-base leading-relaxed">
    <h2 className="text-2xl font-semibold mb-6 text-black">
      Traditional Ligurian Craftsmanship in Home Decor
    </h2>
    <p className="mb-4">
      Liguria is not only a region of breathtaking coastal beauty and cultural heritage—it’s also a land where age-old
      craftsmanship still thrives, shaping the art of home decor with timeless tradition and care.
    </p>
    <p className="mb-4">
      <strong>Ceramic Art from Albissola</strong> – Along the vibrant seaside streets of Albissola, ceramic artistry
      comes to life. This town is the heart of Ligurian ceramic heritage, where hand-painted tiles and intricate pottery
      tell stories of the sea and sky. Ateliers like Ceramiche Pierluca, Paolo Anselmo, and Mazzotti 1903 continue to
      craft elegant ceramic pieces—perfect for adding Mediterranean charm and color to modern living spaces.
    </p>
    <p className="mb-4">
      <strong>Woodwork from Chiavari</strong> – Nestled among ancient forests, Chiavari is celebrated for its beautiful
      native woods—beech, cherry, ash, and maple. Artisans such as Fratelli Levaggi have passed down their woodworking
      craft through generations, creating iconic furniture like the Campanino chair. Their designs, both functional and
      graceful, bring warmth and authenticity to every room.
    </p>
    <p>
      <strong>Leather Craft from Genova</strong> – In the heart of Genova, leatherwork meets design sophistication.
      Workshops like Giobagnara blend tradition with modern aesthetics, handcrafting luxurious leather accessories and
      home accents. These pieces introduce rich textures and timeless elegance—ideal for refined interiors that value
      artisanal quality.
    </p>
  </div>
</div>

    
  );
};

export default Hero;
