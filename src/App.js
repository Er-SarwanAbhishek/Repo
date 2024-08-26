
// import {  HashRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import About from './componenets/about/About';
import Banner from './componenets/banner/Banner';
import Contact from './componenets/contact/Contact';
import Features from './componenets/features/Features';
import Navbar from './componenets/navbar/Navbar';
import Projects from './componenets/projects/Projects';
import Resume from './componenets/resume/Resume';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
       <div className='w-[100%] px-16'>
       <Navbar />
       <Banner />
       <About />
       <Features />
       <Projects />
       <Contact />
       <Resume />
       </div>
    </div>
  );
}

export default App;
