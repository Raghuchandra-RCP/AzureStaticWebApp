import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCubes, faObjectGroup } from '@fortawesome/free-solid-svg-icons';

import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'HyperText Markup Language (HTML) is the standard language for creating webpages. It forms the structure of a webpage by using various tags and elements to define headers, paragraphs, links, images, and other content.',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'Cascading Style Sheets (CSS) is used to style and layout webpages. It allows you to apply styles such as fonts, colors, spacing, and positioning to HTML elements, enhancing the visual appeal and usability of a website.',
      icon: faCss3
    },
    {
      name: 'JavaScript',
      des: 'JavaScript is a versatile programming language that enables interactive web pages. It can be used for client-side (in the browser) and server-side (on the server) development, making it essential for dynamic content and web applications.',
      icon: faJs
    },
    {
      name: 'ReactJS',
      des: 'ReactJS is a popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state of applications efficiently.',
      icon: faReact
    },
    {
      name: 'MongoDB',
      des: 'MongoDB is a document-oriented NoSQL database used for high volume data storage. It is known for its flexibility, scalability, and ability to handle large amounts of unstructured data.',
      icon: faDatabase
    },
    {
      name: 'ExpressJS',
      des: 'ExpressJS is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the development process by offering a suite of tools and middleware.',
      icon: faNode
    },
    {
      name: 'NodeJS',
      des: 'NodeJS is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It is designed to build scalable network applications and allows the use of JavaScript for server-side scripting.',
      icon: faNode
    },
    {
      name: 'Data structures & Algorithms',
      des: 'Data structures and algorithms are fundamental concepts in computer science, essential for building efficient software systems and solving complex problems.',
      icon: faCubes // Icon for Data Structures & Algorithms
    },
    {
      name: 'OOPS',
      des: 'Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data in the form of fields (attributes) and code in the form of procedures (methods). OOP focuses on reusability and modularity in software development.',
      icon: faObjectGroup // Icon for OOPS
    }
  ]);

  return (
    <section className='skills' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Equipped with a versatile skill set, I excel in MERN and web development, breathing life into digital landscapes through HTML, CSS, and JavaScript. My proficiency extends to crafting dynamic front-end interfaces and robust back-end solutions. Together, we can turn ideas into impactful realities.
      </div>
      <div className="list">
        {listSkills.map((skill, index) => (
          <div className='item' key={index} ref={(el) => el && divs.current.push(el)}>
            <FontAwesomeIcon icon={skill.icon} />
            <h3>{skill.name}</h3>
            <div className="des">{skill.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
