import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
         <h2 className="text-base uppercase font-titleFont mb-4">Connect With Me</h2>
         <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaLinkedin />
          </span>
          <span className="bannerIcon">
            <FaInstagram />
          </span>
         </div>
        </div>
       
        <div>
         <h2 className="text-base uppercase font-titleFont mb-4">Currently Working With</h2>
         <div className="flex gap-4">
          <span className="bannerIcon">
            <SiReact />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
         </div>
        </div>
        </div>
  )
}

export default Media
