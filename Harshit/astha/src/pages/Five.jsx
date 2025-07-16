import "./App.css"

import { useState } from "react";

function App() {
  const [tab, setTab] = useState("photos");

  const photos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF98sbQeNeSMz3nbGKwwnh4XyFU-ojyeNghA&s",
    "https://scx2.b-cdn.net/gfx/news/hires/2019/galaxy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0dbreG0xdlNKXMTE64B86Im204nc7-vdjQ&s",
  ];

  return (
    <div className="min-h-screen bg-[#eafafc] flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-semibold text-gray-700 mb-6">
        <span className="text-blue-600 font-bold">Glorious</span> Moments
      </h1>

      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setTab("photos")}
          className={`px-6 py-2 font-semibold rounded ${
            tab === "photos"
              ? "bg-green-400 text-white"
              : "bg-white text-black border"
          }`}
        >
          PHOTOS
        </button>
        <button
          onClick={() => setTab("videos")}
          className={`px-6 py-2 font-semibold rounded ${
            tab === "videos"
              ? "bg-green-400 text-white"
              : "bg-white text-black border"
          }`}
        >
          VIDEOS
        </button>
      </div>

      {tab === "photos" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={Photo ${i + 1}}
              className="h-48 w-auto rounded shadow"
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg mb-8">Videos will appear here...</p>
      )}

      <button className="px-5 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-100 transition">
        Explore Gallery
      </button>
    </div>
  );
}

export default App;