import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'Code-it Search engine',
      des: 'Developed a high-performance search engine using the MERN stack, incorporating modern web technologies to deliver a seamless user experience.',
      mission: 'Scraped and processed a diverse dataset of 3,500 problems from leading coding platforms using Selenium',
      language: 'HTML, CSS, JavaScript, ExpressJS, Node.js,Mongoose,Mongodb',
      images: '/project1.PNG'
    },
    {
      name: 'Personal Portfolio',
      des: 'This project is a comprehensive personal portfolio website built to showcase my skills, projects, and experience. It features a modern and responsive design, interactive UI elements, and detailed sections about my professional journey.',
      mission: 'Designed and implemented a fully responsive personal portfolio using React.js, enhancing my proficiency in front-end development.',
      language: 'React js',
      images: '/project2.PNG'
    },
    {
      name: ' Gym Management System',
      des: 'Developed Gym Management System to manage member records, personal information, payment history, and workout schedules.',
      mission: 'Engineered and launched a sophisticated Gym Management platform, streamlining member records, personal details, payment tracking, and workout schedules, improving operational efficiency by 30%.',
      language: 'MYSQL,GitHub',
      images: '/project3.PNG'
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* Description */}
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div><FontAwesomeIcon icon={faUserCircle} /></div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div><FontAwesomeIcon icon={faGlobeAmericas} /></div>
                <div>
                  <h4>Technologies Used</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
