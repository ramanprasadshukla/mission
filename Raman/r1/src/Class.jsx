import React from "react";



const classesData = [
  {
    id: 1,
    className: "1st",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Activity-Based Learning",
    syllabusLink: "https://www.dpsdurgapur.com/wp-content/uploads/2020/08/Class-1-SYLLABUS.pdf",
    timetableLink: "https://apssaugor.edu.in/pdffiles/clstt1to5.pdf",
    image: "https://dashmeshpsabkp.com/wp-content/uploads/2023/06/keypiller3-1024x682.jpg"
  },
  {
    id: 2,
    className: "2nd",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Interactive Learning",
    syllabusLink: "/syllabus/class2.pdf",
    timetableLink: "/timetable/class2.pdf",
    image: "https://www.nitiforstates.gov.in/public-assets/images/stock_images/GG_Edu_RGAECCE_2.png"
  },
  {
    id: 3,
    className: "3rd",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://erns72xipwt.exactdn.com/wp-content/uploads-new/2024/03/Aastha-Dantewada.jpg?strip=all&lossy=1&ssl=1"
  },
  {
    id: 4,
    className: "4th",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfal8B_UxS4qFh3R7cQKWqnAWAS6_WwxYEDA&s"
  },
  {
    id: 5,
    className: "5th",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://pbs.twimg.com/media/DogZXJ4WkAA-J8i.jpg"
  },
  {
    id: 6,
    className: "6th",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://i.pinimg.com/736x/72/9a/54/729a5402d7a73002cd2d15ab8dfdb5dd.jpg"
  },
  {
    id: 7,
    className: "7th",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://dpl.rashtrapatibhavan.gov.in/public/uploads/upload_files/55554951020120506093248333924650599023.jpeg"
  },
  {
    id: 8,
    className: "8th",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://content.jdmagicbox.com/v2/comp/dantewada/j5/9999p7856.7856.171230062248.v1j5/catalogue/jawahar-navodaya-vidyalaya-geedam-dantewada-secondary-schools-FV8H9JxVtW-250.jpg"
  },
  {
    id: 9,
    className: "9th",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://content.jdmagicbox.com/v2/comp/jagdalpur/w5/9999p7782.7782.140208104934.f2w5/catalogue/sanskar-the-gurukul-international-boarding-school-jagdalpur-ho-jagdalpur-boarding-schools-nza9p44s1v-250.jpg"
  },
  {
    id: 10,
    className: "10th",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://www.esamskriti.com/photograph/75_17365.jpg?2025721438"
  },
  {
    id: 11,
    className: "11th",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpH6rUraG74lDYJyQa4GgpADihjtW6pwXZg&s"
  },
  {
    id: 12,
    className: "12th",
    teacher: "",
    medium: "English",
    board: "CBSE",
    strength: 1,
    teachingStyle: "Smart Class + Activities",
    syllabusLink: "/syllabus/class3.pdf",
    timetableLink: "/timetable/class3.pdf",
    image: "https://pbs.twimg.com/profile_images/1022288891582111744/gL7rtbyt_400x400.jpg"
  }
  
];

function  Classes () {
  return (
    <div className="p-2 bg-gray-100 min-h-screen font-serif overflow-hidden">
      <h1 className="text-5xl text-center  bg-gradient-to-r from-blue-900 to-blue-800  font-bold mb-10 py-8 px-0 text-white font-serif">Our School Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8">
        {classesData.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-gray-400 shadow-lg shadow-black-400/40 hover:shadow-2xl hover:shadow-black-500/60 transform hover:scale-105 transition duration-300 ease-in-out ">
            <img src={item.image} alt={item.className} className="w-full h-60 object-cover "/>
            <div className="p-4">
              <h2 className="text-3xl font-bold mb-2 text-blue-900">{item.className}</h2>
              <p className="text-gray-700 mb-1 text-xl"><strong>Class Teacher:</strong> {item.teacher}</p>
              <p className="text-gray-700 mb-1 text-xl"><strong>Medium:</strong> {item.medium}</p>
              <p className="text-gray-700 mb-1 text-xl"><strong>Board:</strong> {item.board}</p>
              <p className="text-gray-700 mb-1 text-xl"><strong>Strength:</strong> {item.strength} students</p>
              <p className="text-gray-700 mb-3 text-xl"><strong>Teaching Style:</strong> {item.teachingStyle}</p>
              <div className="flex flex-wrap gap-3 text-xl mt-4">
              <a href={item.syllabusLink} target="_blank" className="inline-flex text-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded shadow-md hover:from-blue-700 hover:to-blue-900 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">Syllabus</a> 
              <a href={item.syllabusLink} target="_blank" className="inline-flex text-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded shadow-md hover:from-green-700 hover:to-green-900 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">Time Table</a> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
