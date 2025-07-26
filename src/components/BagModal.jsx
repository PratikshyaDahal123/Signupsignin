// src/components/BagModal.jsx
import React from "react";

const BagModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-[90%] max-w-md text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">YOUR BAG</h2>
        <p className="mb-8 text-sm text-gray-700">
          Your bag is waiting to be filled with treasures that will transform
          your home into a realm of sophistication and comfort.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default BagModal;
