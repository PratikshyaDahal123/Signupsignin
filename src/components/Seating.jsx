// src/components/Seating.jsx
import React, { useState } from "react";

const initialData = [
  { label: "CHAIRS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPrsXd6wL1k8dYW5znDPha7VrUq9k55csFw&s" },
  { label: "SOFAS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S74Ah-Y2PHOFrTywGAVNjIJ9qyL9bF3Rhw&s" },
  { label: "BAR STOOLS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Q74AoBNgpY3shbzZt2fP0LOVfvmRFEeUaw&s" },
  { label: "ARMCHAIRS", img: "https://www.timeoutspace.com/cdn/shop/products/Screenshot_2019-05-28_at_14.34.29_d0e8432e-a198-421a-917a-28b2251aa19f.png?v=1559053388" },
  { label: "LOUNGE CHAIRS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaBIbJqurBjx1yrT0EZR6AAl1sfJfJG-Wow&s" },
  { label: "BENCHES", img: "https://foter.com/photos/425/byington-acacia-outdoor-bench.jpg?s=lbx" },
  { label: "CHAISES", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iAoziJx_teHQmMKjIlFZM_FLjwJtMqdRBQnOPF_t0MlKL5PDQa4jUhtW00S36-UgweE&usqp=CAU" },
  { label: "OFFICE CHAIRS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0kFezCgk-VU7aqyMKSNeBfbs-3lLi7MrEQ&s" },
  { label: "STOOLS", img: "https://modernspaceliving.sg/cdn/shop/products/alervn_bar_stool_high_chair__bsc12_1574850399_6d6a1329_progressive.jpg?v=1589281800" },
];

const Seating = () => {
  const [seatingItems, setSeatingItems] = useState(initialData);

  const handleClick = (index) => {
    const clickedItem = seatingItems[index];
    const newItems = [clickedItem, ...seatingItems.filter((_, i) => i !== index)];
    setSeatingItems(newItems);
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <div className="text-left">
        <p className="text-sm text-gray-500 mb-2">HOME / FURNITURE / SEATING</p>
        <h1 className="text-5xl font-serif mb-4">Seating</h1>
        <p className="text-lg max-w-4xl text-gray-800 font-light">
          Explore our picks in luxury <strong>chairs, contemporary stools</strong> and our stylish selection of
          <strong> designer armchairs</strong> and <strong>sofas</strong>. Complete your décor with our editors’
          favorite <strong>benches & chaises</strong> or our <strong>ottomans & poufs</strong>, all skillfully
          handmade in Italy to add comfort to your interiors.
        </p>
      </div>

      <div className="flex overflow-x-auto space-x-6 mt-10 pb-4 scrollbar-hide">
        {seatingItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-40 text-center cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleClick(idx)}
          >
            <div className="h-40 w-40 mx-auto bg-white shadow-sm rounded-lg flex items-center justify-center">
              <img src={item.img} alt={item.label} className="h-32 object-contain" />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-800">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seating;
