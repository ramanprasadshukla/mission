import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // नया इम्पोर्ट
import Header from './Header';
import Contact from './Pages/Contact';
// import Home from './Pages/Home';
import Sports from './Pages/About/Sports'
import Class from './Pages/About/Class'
import NotFound from './Pages/NotFound';




function App() {
  return (

    <Router> 
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
         <Route path='./Pages/about/Sports' element={<Sports />} />
        <Route path='/conctact' element={<Contact />} />
        <Route path='./about/class' element={<Class/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
    
    
  );
}

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;