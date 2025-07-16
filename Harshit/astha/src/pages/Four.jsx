// import React from 'react';
// import { MapPin } from 'lucide-react';
import "./App.css"
const SchoolHomePage = () => {

  
    const notices = [
      { title: "Raksha Bandhan Holiday", date: "Aug 19, 2025" },
      { title: "Half-Yearly Exams Start", date: "Aug 20, 2025" },
      { title: "Independence Day Celebration", date: "Aug 15, 2025" },
      { title: "Half-Yearly Exams Start", date: "Aug 20, 2025" },
      { title: "Half-Yearly Exams Start", date: "Aug 20, 2025" },
      { title: "Raksha Bandhan Holiday", date: "Aug 19, 2025" },
      { title: "Independence Day Celebration", date: "Aug 15, 2025" },
      { title: "Raksha Bandhan Holiday", date: "Aug 19, 2025" },
      { title: "Half-Yearly Exams Start", date: "Aug 20, 2025" },
    { title: "Raksha Bandhan Holiday", date: "Aug 19, 2025" },
    { title: "Raksha Bandhan Holiday", date: "Aug 19, 2025" },
    { title: "Raksha Bandhan Holiday", date: "Aug 19, 2025" },
    { title: "Independence Day Celebration", date: "Aug 15, 2025" },
    { title: "Raksha Bandhan Holiday", date: "Aug 19, 2025" },
  ];
  
  return (
    <main className="text-gray-800 bg-blue-200">

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('https://www.esamskriti.com/photograph/75_8295.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Empowering Young Minds for a Brighter Tomorrow</h1>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition">
            Admission Open
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-400">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">About Our School</h2>
            <p className="text-gray-600">
              Astha Vidya Mandir is dedicated to nurturing the minds of tomorrow with a vision of holistic education, character building, and academic excellence. Our mission is to empower students with knowledge, values, and skills to become responsible global citizens.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://www.esamskriti.com/photograph/75_8295.jpg" alt="School Building" className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Notice Board</h2>
        <div className="relative overflow-hidden border-y-2 border-blue-200 bg-white shadow-md">
          <div className="flex whitespace-nowrap animate-scroll">
            {notices.map((notice, idx) => (
              <div
                key={idx}
                className="inline-flex items-center px-6 py-3 text-blue-700 font-medium border-r border-blue-300"
              >
                📢 {notice.title} — <span className="ml-2 text-gray-500 text-sm">{notice.date}</span>
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {notices.map((notice, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="inline-flex items-center px-6 py-3 text-blue-700 font-medium border-r border-blue-300"
              >
                📢 {notice.title} — <span className="ml-2 text-gray-500 text-sm">{notice.date}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="text-blue-600 hover:underline font-semibold">View All Notices</button>
        </div>
      </section>

      {/* Academic Highlights Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-400">
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

    </main>
  );
};

export default SchoolHomePage;
