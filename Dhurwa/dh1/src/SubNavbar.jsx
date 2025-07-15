import React from 'react';

function SubNavbar() {
  return (
    <div className="bg-gray-300 text-gray-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-2 space-x-6 hide-scrollbar">
          <a href="/about/history" className="whitespace-nowrap px-2 hover:text-cyan-500 font-medium transition-colors">
            Our History
          </a>
          <a href="/principal" className="whitespace-nowrap px-2 hover:text-cyan-500 font-medium transition-colors">
            Principal's Message
          </a>
          <a href="/curriculum" className="whitespace-nowrap px-2 hover:text-cyan-500 font-medium transition-colors">
            Curriculum
          </a>
          <a href="/faculty" className="whitespace-nowrap px-2 hover:text-cyan-500 font-medium transition-colors">
            Our Faculty
          </a>
          <a href="/gallery" className="whitespace-nowrap px-2 hover:text-cyan-500 font-medium transition-colors">
            Photo Gallery
          </a>
          <a href="/events" className="whitespace-nowrap px-2 hover:text-cyan-500 font-medium transition-colors">
            School Events
          </a>
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;