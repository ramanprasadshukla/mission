import React, { useState, useEffect } from 'react';
import './Teachers.css';
// import './Slideshow.css';

const Teachers = () => {
  const [selectedClass, setSelectedClass] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const slideshowImages = [
    'https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrX9G6PdcR3UzmgUccQWWqRWcT2ohz6dcOG6wAsnlqtuGpkpZlw_tfDrpZhUCJG9MZNLk&usqp=CAU',
    'https://www.venkateshwaragroup.in/vgiblog/wp-content/uploads/2022/09/Untitled-design-2-1-1200x1200.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const classSubjects = {
    1: [
      {
        subject: 'Mathematics',
        teacher: 'Mrs. Sharma',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
        schedule: 'Mon, Wed, Fri - 10:00 AM',
        students: 42,
        classroom: 'Room 101',
        announcement: {
          title: 'Homework Assignment',
          posted: '2 days ago',
          content: 'Complete chapter 5 exercises by Friday.',
        },
      },
      { subject: 'English', teacher: 'Mr. Kapoor', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
      { subject: 'EVS', teacher: 'Ms. Desai', img: 'https://randomuser.me/api/portraits/women/46.jpg' },
      { subject: 'Hindi', teacher: 'Mr. Joshi', img: 'https://randomuser.me/api/portraits/men/47.jpg' },
      { subject: 'Drawing', teacher: 'Ms. Khan', img: 'https://randomuser.me/api/portraits/women/48.jpg' },
    ],
    2: [
      {
        subject: 'Science',
        teacher: 'Mrs. Naik',
        img: 'https://randomuser.me/api/portraits/women/49.jpg',
        schedule: 'Tue, Thu - 9:00 AM',
        students: 39,
        classroom: 'Room 102',
        announcement: {
          title: 'Lab Activity',
          posted: '1 day ago',
          content: 'Bring materials for magnet experiment.',
        },
      },
      { subject: 'English', teacher: 'Mr. Das', img: 'https://randomuser.me/api/portraits/men/50.jpg' },
      { subject: 'Math', teacher: 'Mr. Verma', img: 'https://randomuser.me/api/portraits/men/51.jpg' },
    ],
    3: [
      {
        subject: 'Social Studies',
        teacher: 'Mr. Rao',
        img: 'https://randomuser.me/api/portraits/men/52.jpg',
        schedule: 'Mon, Wed - 8:30 AM',
        students: 35,
        classroom: 'Room 103',
        announcement: {
          title: 'Project Reminder',
          posted: '3 days ago',
          content: 'Submit your project on states and capitals.',
        },
      },
      { subject: 'Computer', teacher: 'Ms. Roy', img: 'https://randomuser.me/api/portraits/women/53.jpg' },
      { subject: 'Hindi', teacher: 'Mrs. Tiwari', img: 'https://randomuser.me/api/portraits/women/54.jpg' },
    ],
    4: [
      { subject: 'Mathematics', teacher: 'Mr. Singh', img: 'https://randomuser.me/api/portraits/men/55.jpg' },
      { subject: 'Science', teacher: 'Mrs. Rani', img: 'https://randomuser.me/api/portraits/women/56.jpg' },
    ],
    5: [
      { subject: 'English', teacher: 'Mr. Paul', img: 'https://randomuser.me/api/portraits/men/57.jpg' },
      { subject: 'Computer', teacher: 'Ms. Mary', img: 'https://randomuser.me/api/portraits/women/58.jpg' },
    ],
    6: [
      { subject: 'Mathematics', teacher: 'Mr. Khan', img: 'https://randomuser.me/api/portraits/men/59.jpg' },
      { subject: 'History', teacher: 'Mr. Chatterjee', img: 'https://randomuser.me/api/portraits/men/60.jpg' },
    ],
    7: [
      { subject: 'Science', teacher: 'Ms. Thomas', img: 'https://randomuser.me/api/portraits/women/61.jpg' },
      { subject: 'English', teacher: 'Ms. Sheila', img: 'https://randomuser.me/api/portraits/women/62.jpg' },
    ],
    8: [
      { subject: 'Geography', teacher: 'Mr. Banerjee', img: 'https://randomuser.me/api/portraits/men/63.jpg' },
      { subject: 'Physics', teacher: 'Mr. Alam', img: 'https://randomuser.me/api/portraits/men/64.jpg' },
    ],
    9: [
      { subject: 'Biology', teacher: 'Mrs. Jain', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
      { subject: 'Chemistry', teacher: 'Mr. Sharma', img: 'https://randomuser.me/api/portraits/men/66.jpg' },
    ],
    10: [
      { subject: 'English', teacher: 'Ms. Rekha', img: 'https://randomuser.me/api/portraits/women/67.jpg' },
      { subject: 'Math', teacher: 'Mr. Bose', img: 'https://randomuser.me/api/portraits/men/68.jpg' },
    ],
    11: [
      { subject: 'Physics', teacher: 'Dr. Rao', img: 'https://randomuser.me/api/portraits/men/69.jpg' },
      { subject: 'Economics', teacher: 'Ms. Patil', img: 'https://randomuser.me/api/portraits/women/70.jpg' },
    ],
    12: [
      { subject: 'Political Science', teacher: 'Mr. Mehta', img: 'https://randomuser.me/api/portraits/men/71.jpg' },
      { subject: 'Psychology', teacher: 'Ms. Ritu', img: 'https://randomuser.me/api/portraits/women/72.jpg' },
    ],
  };

  const classes = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleViewDetails = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="dashboard">
      {/* Slideshow */}
      <div className="slideshow">
        <img src={slideshowImages[slideIndex]} alt="Slide" className="slide-img" />
      </div>

      <div className="dashboard-header">
        <h1>School Teacher Dashboard</h1>
        <p>Manage Classes 1–12 with Subjects and Teachers</p>
      </div>

      <div className="dashboard-content">
        <h2>Select Class</h2>
        <div className="class-buttons">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => {
                setSelectedClass(cls);
                setSelectedSubject(null);
              }}
              className={`class-button ${selectedClass === cls ? 'active' : ''}`}
            >
              Class {cls}
            </button>
          ))}
        </div>

        <h2>Subjects for Class {selectedClass}</h2>

        {classSubjects[selectedClass] ? (
          <table className="subject-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {classSubjects[selectedClass].map((item, index) => (
                <tr key={index} className={index === 0 ? 'highlight-row' : ''}>
                  <td>{item.subject}</td>
                  <td>{item.teacher}</td>
                  <td>
                    <button className="view-link" onClick={() => handleViewDetails(item)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No subject data available.</p>
        )}

        {selectedSubject && (
          <div className="details-box">
            <h2>{selectedSubject.subject} Details</h2>
            <div className="teacher-profile">
              <img
                src={selectedSubject.img || 'https://via.placeholder.com/80'}
                alt={selectedSubject.teacher}
                className="avatar-img"
              />
              <div>
                <strong>{selectedSubject.teacher}</strong>
                <p>{selectedSubject.subject} Teacher</p>
              </div>
            </div>

            <h3>Class Information</h3>
            <p><strong>Class:</strong> Class {selectedClass}</p>
            {selectedSubject.schedule && <p><strong>Schedule:</strong> {selectedSubject.schedule}</p>}
            {selectedSubject.students && <p><strong>Students:</strong> {selectedSubject.students}</p>}
            {selectedSubject.classroom && <p><strong>Classroom:</strong> {selectedSubject.classroom}</p>}

            {selectedSubject.announcement && (
              <>
                <h3>Recent Announcements</h3>
                <div className="announcement-box">
                  <strong>{selectedSubject.announcement.title}</strong>
                  <p className="posted">Posted: {selectedSubject.announcement.posted}</p>
                  <p>{selectedSubject.announcement.content}</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teachers;
