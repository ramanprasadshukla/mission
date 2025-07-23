// import './App.css'
import { useState } from 'react'
import SchoolHomePage from "./components/compjsx/Four";
import Two from "./components/compjsx/two";
import Appcopy from "./components/compjsx/Appcopy";


const Home = () => {

  const [open, setOpen] = useState(1);

  return (
    <>
    <SchoolHomePage/>
    <Two/>
      <div className=" w-full container my-5">
        <h2 className="text-center w-full">Frequently Asked Questions</h2>
        <div className="w-full max-w-2xl mx-auto">
          {/* Question 1 */}
          <div className="border-b w-full">
            <button
              className="w-full text-left py-4 px-2 font-semibold flex justify-between items-center focus:outline-none"
              onClick={() => setOpen(open === 1 ? null : 1)}
            >
              What is the Raman Mission?
              <span>{open === 1 ? '-' : '+'}</span>
            </button>
            {open === 1 && (
              <div className="text-gray-700">
                The Raman Mission is an initiative to explore and understand the universe through advanced technology and research.
              </div>
            )}
          </div>
          {/* Question 2 */}
          <div className="border-b w-full">
            <button
              className="w-full text-left py-4 px-2 font-semibold flex justify-between items-center focus:outline-none"
              onClick={() => setOpen(open === 2 ? null : 2)}
            >
              How can I get involved?
              <span>{open === 2 ? '-' : '+'}</span>
            </button>
            {open === 2 && (
              <div className="text-gray-700">
                You can get involved by joining our community, participating in events, or contributing to our research projects. Check our website for more details.
              </div>
            )}
          </div>
          {/* Question 3 */}
          <div className="border-b w-full">
            <button
              className="w-full text-left py-4 px-2 font-semibold flex justify-between items-center focus:outline-none"
              onClick={() => setOpen(open === 3 ? null : 3)}
            >
              What are the benefits of joining the Raman Mission?
              <span>{open === 3 ? '-' : '+'}</span>
            </button>
            {open === 3 && (
              <div className="text-gray-700">
                Joining the Raman Mission provides you with access to exclusive research findings, networking opportunities with experts in the field, and the chance to contribute to groundbreaking discoveries. You will also receive updates on our latest projects and initiatives.
              </div>
            )}
          </div>
        </div>
      </div>
      <Appcopy/>
    </>
  );
};

export default Home;