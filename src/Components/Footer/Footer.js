import React from 'react'
import './footer.css'
import {   FaGithub,  FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="/#"  className='footer_logo'>Deepak Suthan</a>
      <p style={{marginBottom:"20px",color:"white"}}>Let's connect</p>

     

      <div className='footer_socials'>
         <a href='https://github.com/Deepaksuthan' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
         
         <a href='www.linkedin.com/in/deepak-sudhan213' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
         
      </div>

      <div className="footer_content">
          <small style={{color:"rgb(193, 220, 253 )"}}>Made with 🤍 using React</small>
      </div>
    </footer>
  )
}

export default Footer