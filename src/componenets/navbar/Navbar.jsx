import React from "react";
import { logo } from "../../assets";
import { navLinksData } from "../../constants";
import { Link } from "react-scroll";
// import './navbar.css'

const Navbar = () => {
  return (
    <div  className="w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* <nav id="header">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-menu" id="myNavMenu">
          <ul className="nav_menu_list">
            {navLinksData.map(({ _id, title, link }) => (
              <li className="nav_list" key={_id}>
                <Link
                  activeclassName="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                />
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-button">
          <button className="btn">
            Download CV 
          </button>
        </div>
        
      </nav> */}
            <div className="w-[75px]">
                
                <img src={logo} alt="" className="rounded-full w-[100%]"  />
            </div>
            <div>
                <ul className="flex items-center gap-10">
                    {
                        navLinksData.map(({_id, title, link}) => (
                            <li className="text-base font-normal text-gray-400 cursor-pointer hover:text-designColor duration-300" key={_id}>
                               <Link 
                               activeClass="active"
                               to={link}
                               spy={true}
                               smooth={true}
                               offset={-70}
                               duration={500}>
                                {title}
                               </Link>
                            </li>
                            
                        ))
                    }
                </ul>
            </div>
            {/* <div><button className="text-base font-normal text-gray-400 cursor-pointer hover:text-designColor duration-300 bg-indigo-500 p-[10px] rounded-md">Download Resume</button></div> */}
    </div>
  );
};

export default Navbar;
