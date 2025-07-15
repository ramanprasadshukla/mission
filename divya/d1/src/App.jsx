import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Alumini from "./pages/alumini";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumini" element={<Alumini />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
