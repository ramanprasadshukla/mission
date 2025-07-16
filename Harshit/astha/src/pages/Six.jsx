import React from "react";

const SchoolHomePage = () => {
  const notices = [
    { title: "Half-Yearly Exams Start", date: "Aug 20, 2025" },
    { title: "Independence Day Celebration", date: "Aug 15, 2025" },
    { title: "Raksha Bandhan Holiday", date: "Aug 19, 2025" },
  ];

  return (
    <>
      {/* --- Notice Board Section with smooth ticker --- */}
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
    </>
  );
};

export default SchoolHomePage;
