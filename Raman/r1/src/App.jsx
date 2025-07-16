import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // नया इम्पोर्ट
import Contact from './Pages/Contact';
import Home from './Home';
import Sports from './Pages/About/Sports'
import Class from './Pages/About/Class'
import NotFound from './Pages/NotFound';
import Header from "./components/compjsx/mHeader";



function App() {


  return (
    <>
    
    <Router> 
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='./Pages/about/Sports' element={<Sports />} />
        <Route path='/conctact' element={<Contact />} />
        <Route path='./about/class' element={<Class/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>


    </>
  )
}

export default App
