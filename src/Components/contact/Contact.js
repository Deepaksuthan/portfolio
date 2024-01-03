import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineGithub} from 'react-icons/ai'
import {IoMdCall} from 'react-icons/io'
import { useRef, useState } from 'react';
import emailjs from "emailjs-com"


const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1b8g6fr', 'template_8vuzs3m', form.current, 'jaNE6jcnmWVZG_hQn')
       .then(() => setIsSent(true))
      .catch((error) => console.error('Email error:', error));
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <a href="mailto:selvalatha.deepak111@gmail.com" style={{color:"black"}}>selvalatha.deepak111@gmail.com</a>
          </article>
          <article className='contact_option'>
            <AiOutlineGithub className='contact_option_icon'/>
            <h4>Github</h4>
            <a href="https://github.com/Deepaksuthan" target="_blank" rel="noreferrer" style={{color:"black"}}>Deepaksuthan</a>
          </article>
          <article className='contact_option'>
            <IoMdCall className='contact_option_icon'/>
            <h4>Mobile </h4>
            <h5>+91 9940010704</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name="name" placeholder='Your Full Name' required />
           <input type= 'email' name='email' placeholder='Your Email' required />
           <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>{isSent && <p style={{display:"flex",color:"blue"}}>Message sent to Deepak😊</p>}
        </form>
        
      </div>
    </section>
  )
}

export default Contact

