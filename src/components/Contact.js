import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+91 9381768342'
    },
    {
      title: 'Email',
      value: 'sayimpuraghuchandraprasad@gmail.com'
    },
    {
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/raghu-chandra-248769247/'
    }
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  // Function to check if the value is a URL or an email
  const isURL = (value) => {
    try {
      new URL(value);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="container">
        <h2 className="title" ref={(el) => el && divs.current.push(el)}>
          Share Feedback
        </h2>
        <p className="description" ref={(el) => el && divs.current.push(el)}>
          We'd love to hear from you! Please fill out the form below to get in touch.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number (Optional):</label>
            <input type="tel" id="mobile" placeholder="Enter your mobile number" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" placeholder="Enter your message"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Send</button>
          </div>
        </form>
        <div className="contact-info" ref={(el) => el && divs.current.push(el)}>
          <h3>Get in Touch</h3>
          <ul>
            {listContacts.map((contact, key) => (
              <li key={key}>
                <strong>{contact.title}:</strong>{' '}
                {isURL(contact.value) ? (
                  <a href={contact.value} target="_blank" rel="noopener noreferrer">
                    {contact.value}
                  </a>
                ) : contact.title === 'Email' ? (
                  <a href={`mailto:${contact.value}`}>{contact.value}</a>
                ) : (
                  contact.value
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
