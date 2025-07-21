import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './Header';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

// About Pages
import Sports from './Pages/About/Sports';
// import Class from './Pages/About/Class';
import Teachers from './Pages/About/Teachers';
import Location from './Pages/About/Location'; // Corrected spelling

// News Section (optional future use)
import Meritlist from './Pages/News/Meritlist';
import Result from './Pages/News/Result';
// import Vacancies from './Pages/News/Vacancies';

// Achievements Section (optional future use)
import Festival from './Pages/Achivements/Festival';
import Gallery from './Pages/Achivements/Gallery';
import Alunini from './Pages/Achivements/Alunini';

// Admission Section (optional future use)
import Help from './Pages/Admission/Help';
import Admissionform from './Pages/Admission/Admissionform';

// Academies //
import Std from './Pages/Academies/Std';
import ClassA from './Pages/Academies/ClassA';
import Labs from './Pages/Academies/Labs';
// import Subjects from './Pages/Academies/Subjects';



import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />

        {/* About Section */}
        <Route path='/about/sports' element={<Sports />} />
        {/* <Route path='/about/class' element={<Class />} /> */}
        <Route path='/about/teachers' element={<Teachers />} />
        <Route path='/about/location' element={<Location />} />

        {/* Future Routes (Uncomment when needed) */}

        {/* News */}
        <Route path='/news/meritlist' element={<Meritlist />} />
        <Route path='/news/result' element={<Result />} />
        {/* <Route path='/news/vacancies' element={<Vacancies />} /> */}

        {/* Achivements */}
        <Route path='/achivements/festival' element={<Festival />} />
        <Route path='/achivements/gallery' element={<Gallery />} />
        <Route path='/achivements/alunini' element={<Alunini />} />

        {/* Admission */}
        <Route path='/admission/help' element={<Help />} />
        <Route path='/admission/admissionform' element={<Admissionform />} />
        
        {/* Academies Section */}
            <Route path='/academies/std' element={<Std />} />
              <Route path='/academies/classAcademy' element={<ClassA />} />
                <Route path='/academies/labs' element={<Labs />} />
                    {/* <Route path='/academies/subjects' element={<Subjects />} /> */}


        {/* 404 Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Optional reusable card component
const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;
