import { useState, useEffect } from 'react';

function MeritList() {
  const initialData = [
    { rank: 1, name: 'Alice Johnson', roll: 'A001', class: '10', marks: 98, remarks: 'Selected' },
    { rank: 2, name: 'Bob Smith', roll: 'A002', class: '10', marks: 95, remarks: 'Selected' },
    { rank: 3, name: 'Charlie Brown', roll: 'A003', class: '10', marks: 93, remarks: 'Selected' },
    { rank: 4, name: 'David Wilson', roll: 'A004', class: '10', marks: 90, remarks: 'Waiting List' },
    { rank: 5, name: 'Eva Green', roll: 'A005', class: '10', marks: 88, remarks: 'Waiting List' },
  ];

  const [meritData, setMeritData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: 'rank', direction: 'asc' });
  const [filteredData, setFilteredData] = useState(initialData);
  const [notification, setNotification] = useState('');
  const [lastUpdated] = useState(new Date());
  const [foundStudent, setFoundStudent] = useState(null);

  const classes = ['10', '11', '12'];

  useEffect(() => {
    let data = meritData;

    if (filterClass !== 'All') {
      data = data.filter(item => item.class === filterClass);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      data = data.filter(
        item =>
          item.name.toLowerCase().includes(term) ||
          item.roll.toLowerCase().includes(term) ||
          item.class.toLowerCase().includes(term)
      );
    }

    setFilteredData(data);
  }, [searchTerm, filterClass, meritData]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setFilteredData(sortedData);
  };

  const handleDownloadPDF = () => {
    alert('Download PDF functionality goes here.');
  };

  const handlePrint = () => {
    window.print();
  };

  const getRowColor = (rank) => {
    if (rank <= 5) return 'bg-yellow-100';
    return '';
  };

  const totalStudents = meritData.length;
  const totalMarks = Math.max(...meritData.map(s => s.marks));
  const passCount = meritData.filter(s => s.marks >= 35).length;
  const passPercentage = ((passCount / totalStudents) * 100).toFixed(2);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <header className="flex flex-col items-center p-4 bg-blue-600 text-white">
        <div className="text-lg font-semibold mt-2 md:mt-0">Merit List – 2023 / Class 10</div>
      </header>

      {/* Notification */}
      {notification && (
        <div className="p-4 bg-green-100 text-green-800 flex justify-between items-center">
          <span>{notification}</span>
          <button onClick={() => setNotification('')} className="ml-4 font-bold">&times;</button>
        </div>
      )}

      {/* Last Updated & Stats */}
      <div className="flex flex-col md:flex-row justify-between p-4 border-b">
        <div className="mb-2 md:mb-0">
          <span className="font-semibold">Last Updated:</span>{' '}
          {lastUpdated.toLocaleString()}
        </div>
        <div className="flex space-x-4">
          <div><span className="font-semibold">Total Students:</span> {totalStudents}</div>
          <div><span className="font-semibold">Cut-off Marks:</span> {totalMarks}</div>
          <div><span className="font-semibold">Pass Percentage:</span> {passPercentage}%</div>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="p-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2">
          <input
            type="text"
            placeholder="Enter Name or Roll Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {
              const value = searchTerm.trim();
              const found = meritData.find(
                (student) =>
                  student.name.toLowerCase() === value.toLowerCase() ||
                  student.roll.toLowerCase() === value.toLowerCase()
              );

              if (value === '') {
                setNotification('');
                setFoundStudent(null);
              } else if (found) {
                setNotification(`Student "${found.name}" found in the list.`);
                setFoundStudent(found);
              } else {
                setNotification(`No student found for "${value}".`);
                setFoundStudent(null);
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Search Student
          </button>
        </div>

        <div className="w-full md:w-1/4">
          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="All">All Classes</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>Class {cls}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Found Student Info */}
      {foundStudent && (
        <div className="p-4 mx-4 mb-4 bg-blue-50 border rounded shadow text-sm md:text-base">
          <div><strong>Name:</strong> {foundStudent.name}</div>
          <div><strong>Roll:</strong> {foundStudent.roll}</div>
          <div><strong>Class:</strong> {foundStudent.class}</div>
          <div><strong>Marks:</strong> {foundStudent.marks}</div>
          <div><strong>Remarks:</strong> {foundStudent.remarks}</div>
        </div>
      )}

      {/* Merit Table */}
      <div className="overflow-x-auto p-4">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="cursor-pointer px-4 py-2 border-b" onClick={() => handleSort('rank')}>
                Rank {sortConfig.key === 'rank' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="cursor-pointer px-4 py-2 border-b" onClick={() => handleSort('name')}>
                Student Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="px-4 py-2 border-b">Roll Number</th>
              <th className="px-4 py-2 border-b">Class/Grade</th>
              <th className="cursor-pointer px-4 py-2 border-b" onClick={() => handleSort('marks')}>
                Total Marks/% {sortConfig.key === 'marks' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="px-4 py-2 border-b">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4">No records found.</td>
              </tr>
            ) : (
              filteredData.map((student) => (
                <tr
                  key={student.roll}
                  className={`${getRowColor(student.rank)} hover:bg-gray-100`}
                >
                  <td className="px-4 py-2 border-b">{student.rank}</td>
                  <td className="px-4 py-2 border-b">{student.name}</td>
                  <td className="px-4 py-2 border-b">{student.roll}</td>
                  <td className="px-4 py-2 border-b">{student.class}</td>
                  <td className="px-4 py-2 border-b">{student.marks}</td>
                  <td className="px-4 py-2 border-b">{student.remarks}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Download / Print */}
      <div className="p-4 flex space-x-4 justify-center">
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Download PDF
        </button>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Print List
        </button>
      </div>
    </div>
  );
}

export default MeritList;
