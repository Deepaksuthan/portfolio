import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from 'react-icons/fa'



const Education = () => {
  return (
    <section id='education'>
      <h5>What I have studied</h5>
      <h2>Education</h2>
         
<VerticalTimeline>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.4) ' }}
           date='2016 - 2020'
           iconStyle={{  background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Easwari engineering college</h3>
          <p className="vertical-timeline-element-subtitle">Bachelor Degree in Civil Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.4' }}
           date="2015 - 2019"
           iconStyle={{ background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">vidhyaa vikas matric. higher secondary school</h3>
          <h4 className="vertical-timeline-element-subtitle">Higher Secondary</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ color: 'gray', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}
           contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0.4' }}
           date="2013 - 2015"
           iconStyle={{background: 'linear-gradient(45deg, transparent, tomato, transparent)', color: '#fff' }}
           icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">J.Jeya matriculation School</h3>
          <h4 className="vertical-timeline-element-subtitle">Lower Secondary</h4>
        </VerticalTimelineElement>
        
     </VerticalTimeline>
      </section >
  )
}

export default Education

/*  */