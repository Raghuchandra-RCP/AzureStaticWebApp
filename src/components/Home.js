import React, { useRef } from 'react';
import CustomHook from './CustomHook';

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className='home'>
      <div className="content">
        <div className="name">
        Hi I'm <span>Raghu chandra</span>
        </div>
        <div className="des">
        I'm a passionate and self-driven pre-final year student at IIIT RANCHI, eagerly pursuing my dreams of becoming a successful developer in the tech industry.
        With an insatiable thirst for knowledge and a relentless drive to learn, I constantly explore new technologies and techniques to enhance my skills.
        </div>
        <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
          Download My CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/raghu.jpg" alt="Raghu Chandra" />
          
        </div>
      </div>
    </section>
  );
}

export default Home;
