import React from 'react'
import './about.css'
import ME from '../../Asserts/p11.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={ME} alt="About_image" />
          </div>
        </div>

        <div className='about_content'>
          <p>
          As an aspiring Full stack developer with a background in MERN stacks,
           I am excited to apply my skills and knowledge to build great websites and applications. I have experience in a non-IT company, but I am now looking to shift my career to IT and pursue my passion for coding and software development.
           I am confident in my ability to learn and adapt quickly to new technologies and frameworks .
             With my expertise in HTML, CSS, JavaScript, and other frameworks and libraries, I am ready to take on new challenges and contribute to the success of any team or project I work on.
          </p>
          <h3>Here are a Few Highlights:</h3>
          <ul>
            <li>Full Stack web and mobile development</li>
            <li>Interactive Front End as per the design</li>
            <li>React</li>
            <li>Building REST API</li>
            <li>Managing database</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;

