import React from 'react'

import { FaDownload } from 'react-icons/fa'
import './about.css'


const About = () => {
  return (
    <main className="section container">


<section class="aboutSection">
		<div class="aboutContents">
			
			

			<div class="aboutImage">
				<img src="" alt=''/>
			</div>

		

			<div class="aboutInfo">
				<h1>About Me</h1>
				<h2>I'm a MERN Stack Developer</h2>
				<p>I am passionate about creating responsive and user-friendly websites using MERN stack and Django framework. I have successfully created an E-commerce website using Django and SQLite. Currently I am working on creating a room booking web application. </p>
				<div class="aboutPersonalInfo">
					<div><span>Name:</span><span>Abhishek Kumar</span></div>
					<div><span>D.O.B:</span><span>25 March 2003</span></div>
					<div><span>Email:</span><span>abhisheknagina90@gmail.com</span></div>
					<div><span>Email:</span><span>abhisheknagina90@gmail.com</span></div>
					<div><span>Phone No:</span><span>8057802352</span></div>
					<div><span>Address:</span><span>Aurangjebpur Hardas Tehsil-Nagina, Dist-Bijnor (U.P) Pin code- 246762</span></div>
				</div>
          <div className="about_btn">
          <a href="Abhishek_Updated_Resume.pdf" download="Abhishek_Updated_Resume.pdf" className='button cv_btn'>Download Cv {' '}
          <span className="button__icon "><FaDownload /></span></a>
          </div>
			</div>


<div class="aboutSkills">
	
<div class="skill">
	<div class="subject">Hard Work</div>
	<div class="progress_bar">
		<div class="progress_line" value="93%" style={{maxWidth: "93%"}}></div>
	</div>
</div>

<div class="skill">
	<div class="subject">Communication</div>
	<div class="progress_bar">
		<div class="progress_line" value="76%" style={{maxWidth: "76%"}}></div>
	</div>
</div>

<div class="skill">
	<div class="subject">Creativity</div>
	<div class="progress_bar">
		<div class="progress_line" value="74%" style={{maxWidth: "74%"}}></div>
	</div>
</div>

<div class="skill">
	<div class="subject">Adaptibility</div>
	<div class="progress_bar">
		<div class="progress_line" value="86%" style={{maxWidth: "86%"}}></div>
	</div>
</div>

</div>

			

		</div>
	</section>
    </main>
  )
}

export default About
