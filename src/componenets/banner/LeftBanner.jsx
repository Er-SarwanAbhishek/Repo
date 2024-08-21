import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["web Developer.", "MERN Stack Developer.", "Java Programmer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });


  return (
    <div className="w-1/2 lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">Welcome To My Website</h4>
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Abhishek Kumar</span>
          </h1>
          {/* typewriter */}
          <h2>
            a <span className="text-4xl font-bold text-white">{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>

          <p className=" text-base font-bodyFont leading-6 tracking-wide">
            Hi there! I'm Abhishek kumar a Web Developer. I am passionate about
            creating responsive, beautiful and user-friendly web applications
            through careful crafted code and user-cengtric design.
          </p>
        </div>
        
      <Media />
      </div>
  ) 
}

export default LeftBanner
