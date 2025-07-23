import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // नया इम्पोर्ट
import Contact from './Pages/Contact';
import Home from './Home';
import Sports from './Sports';
import Class from './Class';
import NotFound from './Pages/NotFound';
import Header from "./components/compjsx/mHeader";
import Festival from './Pages/Achivements/Festival';
import Teachers from './Pages/About/Teachers';
import Alumini from './Pages/Achivements/Alumini';
import Footer from './Footer'; // नया इम्पोर्ट



function App() {


  return (
    <>
    
    <Router> 
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<Home />} />
         <Route path='/Pages/about/Sports' element={<Sports />} />
        <Route path='/conctact' element={<Contact />} />
        <Route path='/achivements/Festival' element={<Festival />} />
        <Route path='/achivements/alumini' element={<Alumini />} />
        <Route path='/about/class' element={<Class />}/>
        <Route path='/about/teachers' element={<Teachers />}/>
      </Routes>
      <Footer />
    </Router>


    </>
  )
}

export default App
