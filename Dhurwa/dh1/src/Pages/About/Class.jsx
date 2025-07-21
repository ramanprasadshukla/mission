import React from 'react';
import { Link } from 'react-router-dom';

function Class() {
  const subjects = ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer'];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Class 10 - A</h1>
      <p className="text-gray-600 mb-6">
        Welcome to Class 10 - A! This class focuses on developing a strong foundation in core subjects and preparing students for board exams.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Subjects Offered</h2>
        <ul className="list-disc list-inside text-gray-700">
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Class Teacher</h2>
        <p className="text-gray-700">Mrs. Anjali Verma (M.Sc., B.Ed.)</p>
      </div>

      <button
        aria-label="Join Class"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Join Class
      </button>

      <div className="mt-6">
        <Link to="/" className="text-blue-600 underline">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Class;
