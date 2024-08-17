
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Banner from './componenets/banner/Banner';
import Features from './componenets/features/Features';
import Navbar from './componenets/navbar/Navbar';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
       <div className='w-[100%] px-16'>
        <HashRouter>
        <Routes>
          <Route path = "/" element= {<Navbar />} />
          <Route path = "/banner" element= {<Banner />} />
          <Route path = "/features" element= {<Features />} />
        </Routes>
        </HashRouter>
       </div>
    </div>
  );
}

export default App;