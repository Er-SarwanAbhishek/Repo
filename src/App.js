
import './App.css';
import Banner from './componenets/banner/Banner';
import Features from './componenets/features/Features';
import Navbar from './componenets/navbar/Navbar';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
       <div className='w-[100%] px-16'>
        <Navbar />
        <Banner />
        <Features />
       </div>
    </div>
  );
}

export default App;
