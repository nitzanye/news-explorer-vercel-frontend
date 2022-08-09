import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Navigation from "../Navigation/Navigation";
import './Header.css';

const Header = (props) => {
  const { 
    loggedIn, 
    onLogout, 
    onLogin, 
    popupOpened,
  } = props;


  const {pathname} = useLocation();
  const lightHeader = pathname === '/saved-news'

  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

  const toggleHamburger = () => setIsDropDownOpen(!isDropDownOpen);
  const handleNavClick = () => setIsDropDownOpen(false);

  React.useEffect(() => {
    setIsDropDownOpen(false);
  }, [setIsDropDownOpen]);
 
  return (
    <header
      className={`header
      ${popupOpened? 'header__hidden' : ''}`}>
      <div
        className={`overlay 
        ${isDropDownOpen ? 'overlay-visible' : ''}`}
        onClick={toggleHamburger}
      >
      </div>
      <div 
         className={`header__content
         ${lightHeader ? 'header__content_light' : ''}
         ${!isDropDownOpen && !lightHeader ? 'header__content' : ''}
         ${isDropDownOpen && !lightHeader ? 'header__content_dark' : ''}
         `}
      >
        <h2 className={`header__logo ${lightHeader ? 'header__logo_light' : 'header__logo_dark'}`}>NewsExplorer</h2>
        <button
          className={`
          ${lightHeader ? 'header__menu header__menu_dark' : 'header__menu header__menu_light'} 
          ${isDropDownOpen ? 'header__close' : ''} 
          ${isDropDownOpen && lightHeader ? 'header__close_dark' : ''}`}
          onClick={toggleHamburger}
        />
      <Navigation 
        onClick={handleNavClick}
        loggedIn={loggedIn}
        onLogin={onLogin}
        onLogout={onLogout}
        isDropDownOpen={isDropDownOpen}
        lightHeader={lightHeader}
      />
      </div> 
    </header>
  );
};

export default Header;
