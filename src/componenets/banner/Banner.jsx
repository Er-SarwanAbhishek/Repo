import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["web Developer.", "MERN Stack Developer.", "Java Programmer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="w-full h-[800px] py-20 flex border-b-[1px] border-b-black"
    >
      <div className="w-1/2 flex flex-col gap-20">
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
        <div>
         <h2 className="text-base uppercase font-titleFont mb-4">Connect With Me</h2>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
