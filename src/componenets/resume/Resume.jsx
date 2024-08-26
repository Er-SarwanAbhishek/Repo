import React from 'react'
import Title from '../layouts/Title'
const Resume = () => {
  return (
    <section
    id="resume"
    className="w-full  py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
      <Title title= 'Educational Qualification' />
    </div>
    <div className="">
      <ul className='w-full grid grid-cols-3'>
        <li className='resumeli'>Education</li>
        <li className='resumeli'>Skills</li>
        <li className='resumeli'>Experience</li>
       
      </ul>
    </div>
    <div className="">
      <p>2020-2024</p>
      <h2>Education</h2>
    </div>
    </section>
  )
}

export default Resume
