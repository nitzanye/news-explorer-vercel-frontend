import React from "react";  
import './Navigation.css';
import { NavLink, useLocation } from "react-router-dom";

import logoutLight from '../../images/logoutLight.svg';
import logoutDark from '../../images/logoutDark.svg';
// import { CurrentUserContext  } from "../../contexts/CurrentUserContext";

const Navigation = (props) => {
  const {
    loggedIn, 
    onLogin, 
    onLogout,
    isDropDownOpen,
    currentUser,

  } = props;
  
  // const currentUser = React.useContext(CurrentUserContext);
  const {pathname} = useLocation();
  const lightHeader = pathname === '/saved-news'

  return (
    <nav className={`nav 
      ${isDropDownOpen ? 'nav_open' : ''}
      ${isDropDownOpen && loggedIn ? 'nav_open-user' : ''}
      `}>
      <NavLink
      className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav__link')} 
      to={'/'}
      > Home 
      </NavLink>
      {loggedIn && (
        <NavLink 
        className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav__link')} 
        to={'/saved-news'}
        > Saved articles
        </NavLink>
      )}
      {!loggedIn ? (
        <button 
          onClick={onLogin}
          className={`nav__button ${lightHeader ? 'nav__button_style_light' : 'nav__button_style_dark'}`}
          >
          Sign in
        </button>
      ): (
        <button
          onClick={onLogout}
          className={`nav__button nav__button-user ${lightHeader ? 'nav__button_style_light' : 'nav__button_style_dark'}`}
        >
          {currentUser.name}
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
