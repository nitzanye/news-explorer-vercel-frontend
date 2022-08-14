// A presentational component that displays information about the author
import React from "react";
import author from '../../images/author.jpeg';
import './About.css';

const About = () => {
  return (
    <section className='about'>
      <img  className='about__img' src={author} alt='Author' />
      <article className='about__wrapper'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__text'>Hey, I'm Nitzan Smulevici, a full-stack web developer with experience building websites and web applications.

Focused on MERN stack (MongoDB, ExpressJS, React, Node).</p>
        <p className='about__text'>Feel free to contact me via the links below for business inquiries.</p>
      </article>
    </section>
  );
}

export default About;
