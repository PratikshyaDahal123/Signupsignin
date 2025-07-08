import React from 'react';

const ArtMenu = () => {
  return (
    <div className="w-full bg-white px-20 py-12 shadow-lg">
      <div className="grid grid-cols-3 gap-16 text-gray-800 max-w-screen-xl mx-auto">
        {/* DECORATIVE ART PAINTINGS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">DECORATIVE ART PAINTINGS</h3>
          <ul className="space-y-2 text-sm">
            <li>Abstract art</li>
            <li>Figurative paintings</li>
            <li>Portraits</li>
            <li>SCULPTURES & STATUES</li>
            <li>TAPESTRY</li>
          </ul>
        </div>

        {/* PHOTOGRAPHY */}
        <div>
          <h3 className="text-lg font-semibold mb-4">PHOTOGRAPHY</h3>
          <ul className="space-y-2 text-sm">
            <li>Architecture & Design</li>
            <li>Documentary & Travel</li>
            <li>Fine Art</li>
            <li>Portrait Photography</li>
            <li>PRINTS</li>
          </ul>
        </div>

        {/* CURATOR'S PICKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CURATOR'S PICKS</h3>
          <ul className="space-y-2 text-sm">
            <li>Sculpted Masterpieces: Art Meets Ceramics</li>
            <li>Oversize Artworks</li>
            <li>The Art of Portrait</li>
            <li>Abstract Art</li>
            <li>Italy Through a Lens</li>
            <li>Surrealist Visions</li>
            <li>Architectural Photography</li>
            <li>Design Shots</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArtMenu;
