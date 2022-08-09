import React from "react";  
import './Navigation.css';
import { Link, useLocation } from "react-router-dom";

import logoutLight from '../../images/logoutLight.svg';
import logoutDark from '../../images/logoutDark.svg';

const Navigation = (props) => {
  const {
    loggedIn, 
    onLogin, 
    onLogout,
    isDropDownOpen,
  } = props;

  const {pathname} = useLocation();
  const lightHeader = pathname === '/saved-news'

  return (
    <nav className={`nav ${isDropDownOpen ? 'nav_open' : ''}`}>
      <Link to='/'
      className={`nav__link ${lightHeader ? 'nav_light' : 'nav_dark'}`} 
      > Home 
      </Link>
      {loggedIn && (
        <Link to='/saved-news'
        className={`nav__link ${lightHeader ? 'nav_light' : 'nav_dark'}`} 
        > Saved articles
        </Link>
      )}
      {!loggedIn ? (
        <button 
          onClick={onLogin}
          className={`nav__button ${lightHeader ? 'nav__button_light' : 'nav__button_dark'}`}
          >
          Sign in
        </button>
      ): (
        <button
          onClick={onLogout}
          className={`nav__button nav__button-user ${lightHeader ? 'nav__button_light' : 'nav__button_dark'}`}
        >
          Elise
          <img 
          className='nav__logout' 
          src={lightHeader ? logoutDark : logoutLight}
          alt='Log out icon'
          />
        </button>
      )}
    </nav>
  );
}

export default Navigation;
