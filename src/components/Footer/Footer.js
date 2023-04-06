import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import githubIcon from '../../images/githubIcon.svg';
import linkedin from '../../images/linkedinIcon.svg';

const Footer = () => {
  return (
    <footer className='footer'> 
      <section className='footer__section'>
        <p className='footer__copyright'>
          &copy; {new Date().getFullYear()} News Explorer
        </p>
        <nav className='footer__items'>
          <div className='footer__links'>
            <Link to='/' className='footer__link'>
              Home
            </Link> 
            <a className='footer__link footer__link-last' href='https://practicum.com'>
               Practicum by Yandex
            </a>
          </div>
          <div className='footer__social-items'>
            <a className='footer__social-icon' href='https://github.com/nitzanye'>
              <img src={githubIcon} alt='GitHub Icon' />
            </a>
            <a className='footer__social-icon' href='https://www.linkedin.com/in/nitzan-smulevici/'>
              <img src={linkedin} alt='linkedin Icon' width='20px'/>
            </a>
          </div>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
