import React from "react";

const TopBar = ({ onContactClick, onAboutClick }) => {
  return (
    <div className="bg-black text-white text-sm px-4 py-2 flex justify-between">
      <div className="flex gap-4">
        <span>🌐 Nepal (rs)</span>
        <span>LANGUAGE: ENG</span>
      </div>
      <div className="flex gap-4">
        <button onClick={onAboutClick} className="hover:underline">
          ABOUT Decorish
        </button>
        <button onClick={onContactClick} className="hover:underline">
          📞 CONTACT US
        </button>
      </div>
    </div>
  );
};

export default TopBar;
