// A presentational component that displays information about the author
import React from "react";
import author from '../../images/author.jpeg';
import './About.css';
// import '../About/About.css';

const About = () => {
  return (
    <div className='about__container'>
      <img  className='about__img' src={author} alt='Author picture' />
      <article className='about__wrapper'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__text'>Hey, I'm Nitzan Smulevici, a full-stack web developer with experience building websites and web applications.

Focused on MERN stack (MongoDB, ExpressJS, React, Node).</p>
        <p className='about__text'>Feel free to contact me via the links below for business inquiries.</p>
      </article>
    </div>
  );
}

export default About;