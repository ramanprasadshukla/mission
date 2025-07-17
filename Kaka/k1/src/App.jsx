import React from 'react';

const TeacherVacancy = () => {
  const data = [
    {
      range: 'Class Range I to V',
      vacancies: [
        { subject: 'Math', posts: 4 },
        { subject: 'English', posts: 2 },
        { subject: 'Hindi', posts: 1 },
      ],
    },
    {
      range: 'Class Range VI to VIII',
      vacancies: [
        { subject: 'Hindi', posts: 3 },
        { subject: 'Chemistry', posts: 2 },
      ],
    },
    {
      range: 'Class IX to XII',
      vacancies: [
        { subject: 'Hindi', posts: 3 },
        { subject: 'Chemistry', posts: 2 },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-blue-700 text-2xl font-bold text-center mb-6">Teacher Vacancy Information</h1>

      {data.map((group, idx) => (
        <div key={idx} className="border p-4 rounded-lg shadow-md">
          <h2 className="text-rose-600 text-xl font-semibold mb-4 text-center">{group.range}</h2>

          {group.vacancies.length > 0 ? (
            <table className="w-full border border-gray-300 mb-4">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2 text-left">Subject</th>
                  <th className="border px-4 py-2 text-left">Vacant Posts</th>
                </tr>
              </thead>
              <tbody> 
                {group.vacancies.map((item, i) => (
                  <tr key={i}>
                    <td className="border px-4 py-2">{item.subject}</td>
                    <td className="border px-4 py-2">{item.posts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 italic">No vacancies listed</p>
          )}

          
          <div className="text-center">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-800 transition duration-200"
            >
              Click and apply for job
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherVacancy;
