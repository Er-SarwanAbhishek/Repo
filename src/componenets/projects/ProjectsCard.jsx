import React from "react";
import "./project.css";
import { BsGithub } from "react-icons/bs";
import { projectImg } from "../../assets";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className=" w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000 border-[1px]">
      <div className="main-container">
        <div className="image-container">
          <img src={projectImg} alt="Sample Image" />
          <div className="overlay">
            <div className="overlay-text">
              {" "}
              <div className="w-full mt-5 flex flex-col gap-6">
                <div>
                  <div className=" flex items-center justify-between">
                    <h3 className="text-base uppercase text-designColor font-normal">
                      {title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-lg w-10 h-10 rounded-full bg-white inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BsGithub />
                      </span>
                    </div>
                  </div>
                  <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                    {des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="mt-2 flex items-center justify-between">
                    <h3 className="text-base uppercase text-designColor font-normal">
                      {title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-lg w-10 h-10 rounded-full bg-white inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BsGithub />
                      </span>
                    </div>
                  </div>
      {/* <div className="w-full h-[80%] overflow-hidden rounded-lg">
  <img className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt="" />
</div> */}

      {/* <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className=" flex items-center justify-between">
            <h3 className='text-base uppercase text-designColor font-normal'>{title}</h3>
            <div className="flex gap-2">
              <span className='text-lg w-10 h-10 rounded-full bg-white inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'><BsGithub /></span>
            </div>
          </div>
          <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{des}</p>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectsCard;
