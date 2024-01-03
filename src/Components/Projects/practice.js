import React from 'react';
import './projects.css';
import {PracticeData } from './practicedata';


const practice = () => {
    return (
      <section id='projects'>
        <h5>My Recent Works</h5>
        <h2>practice</h2>
  
        <div className='container projects_container'>
          {PracticeData.map((practice, i) => {
            return (
              <article key={i} className='projects_item'>
                <div className='projects_item_image'>
                  <img src={practice.image} alt={practice.title} />
                </div>
                <h2>{practice.title}</h2>
  
                <h4>Made With:</h4>
                <div className='made-with'>
                  {practice.made.map((mad, i) => (
                    <div key={i} className='made'>
                      <span>{mad}</span>
                    </div>
                  ))}
                </div>
                <div className='practice-item-line'></div>
                <div className='projects_item_links' style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap' }}>
                  <a href={practice.github} className='btn' target='_blank' rel='noreferrer' style={{ color: 'white', backgroundColor: 'rgb(100, 134, 246)' }}>
                    Frontend
                  </a>
                  <a href={practice.backend} className='btn' target='_blank' rel='noreferrer' style={{ color: 'white', backgroundColor: 'rgb(100, 134, 246)' }}>
                    Backend
                  </a>
                  <a href={practice.demo} className='btn btn-primary' target='_blank' rel='noreferrer'>
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  };
  export default practice;
  
  