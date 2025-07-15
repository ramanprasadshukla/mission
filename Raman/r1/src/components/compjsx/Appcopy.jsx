import { useState } from "react";

function App() {
  return (
    <>
      <HomePage/>
    </>
  );
}

function HomePage({ onExplore }) {
  const [tab, setTab] = useState("photos");
  const photos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF98sbQeNeSMz3nbGKwwnh4XyFU-ojyeNghA&s",
    "https://scx2.b-cdn.net/gfx/news/hires/2019/galaxy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0dbreG0xdlNKXMTE64B86Im204nc7-vdjQ&s",
  ];

  return (<>


          {/* Academic Highlights Section */}
      <section className="container mx-auto p-6 py-12 px-4 md:px-16 bg-gray-400">
        <h2 className="text-2xl font-bold mb-8 text-center">Academic Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "💻", title: "Smart Classrooms" },
            { icon: "🔬", title: "Science & Computer Labs" },
            { icon: "🏀", title: "Sports & Physical Activities" }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

    <div
      className="  min-h-screen flex flex-col items-center px-4 py-10"
      style={{ backgroundColor: "#eafafc", textAlign: "center" }}
    >
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
          style={{ minWidth: "100px" }}
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
          style={{ minWidth: "100px" }}
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
              alt={`Photo ${i + 1}`}
              className="rounded shadow"
              style={{ height: "200px", width: "auto", objectFit: "cover" }}
            />
          ))}
        </div>
      ) : (
        <p
        className="text-lg mb-8 text-gray-500"
        style={{ fontStyle: "italic" }}
        >
          Videos will appear here...
        </p>
      )}

      <button
        onClick={onExplore}
        className="px-5 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-100 transition"
        style={{ marginTop: "1rem" }}
      >
        Explore Gallery
      </button>
    </div>
        </>
  );
}

export default App;
