import React from "react";
import { useParams } from "react-router-dom";
import products from "../components/productdata"; // adjust path if needed

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div>Product not found.</div>;
  

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-4">{product.price}</p>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition">
            ADD TO BAG
          </button>

          {/* Delivery & Shipping Info */}
          <div className="mt-6 text-sm text-gray-700 space-y-2">
            <p>🚚 Handcrafted for you in Italy in 1–2 weeks</p>
            <p>
              📦 Shipping to United States: USD 80 (
              <a href="#" className="underline text-black">Curbside</a>)
            </p>
            <p>
              🧤 Need <a href="#" className="underline text-black">White Glove</a> delivery?{" "}
              <a href="#" className="underline text-black">Fill in the form</a>
            </p>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="bg-gray-100 p-6 mt-12 rounded-lg">
        <h3 className="text-xl font-serif mb-4">Product Details</h3>
        <p><strong>Material:</strong> {product.material}</p>
        <p><strong>Dimensions (in):</strong> {product.dimensions}</p>
        <p><strong>Product reference:</strong> {product.reference}</p>
        <p><strong>Tearsheet:</strong> <a href={product.tearsheetLink} className="underline">Download</a></p>
      </section>

      {/* Buy with Confidence Section */}
      <section className="bg-gray-100 p-6 mt-6 rounded-lg">
        <h3 className="text-xl font-serif mb-4">Buy with confidence</h3>
        <p>🌍 Worldwide Shipping. <a href="#" className="underline">Shipping Options</a></p>
        <p>🎨 Expert <a href="#" className="underline">Design Advice</a> at your Service</p>
        <p>💰 Best Price Guaranteed. <a href="#" className="underline">Buyer Protection Program</a></p>
        <p>↩️ 14 Days Returns. <a href="#" className="underline">Returns Policy</a></p>
      </section>
    </div>
  );
};

export default ProductDetail;
