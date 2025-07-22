import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-black text-white text-sm px-4 py-2 flex justify-between">
      <div className="flex gap-4">
        <span>🌐 Nepal (rs)</span>
        <span>LANGUAGE: ENG</span>
      </div>
      <div className="flex gap-4">
        <Link to="/about" className="hover:underline">
          ABOUT Decorish
        </Link>
        <Link to="/contact" className="hover:underline">
          📞 CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
