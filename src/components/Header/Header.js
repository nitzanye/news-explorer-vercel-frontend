import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
// import Navigation from "../Navigation/Navigation";
import '../Navigation/Navigation.css';
import './Header.css';
// import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Header = (props) => {
  const { loggedIn, onLogout } = props;

  const {pathname} = useLocation();
  const lightHeader = pathname === '/saved-news'
  // // if logged in show saved news header

  const windowWidth = useWindowDimensions();
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

  const headerHamburgerButtonClassName =`${isDropDownOpen
      ? `header__hamburger-icon header__hamburger-close`
      : `header__hamburger-icon`}`

  const headerHamburgerMenuClassName = `${isDropDownOpen
      ? `header__hambuger-menu header__hamburger-menu_visible`
      : `header__hambuger-menu`}`

  const toggleHamburger = () => setIsDropDownOpen(!isDropDownOpen);
  const handleNavClick = () => setIsDropDownOpen(false);

  React.useEffect(() => {
    setIsDropDownOpen(false);
  }, [setIsDropDownOpen]);

  const renderHeader = () => {
    if (!loggedIn && windowWidth > 600) {
      return (
        <header className='header header__section'>
          <nav className='nav__section'>
            <ul className='nav__menu'>
              <li className='nav__item'>
                <Link className='nav__link nav__bottom-border nav__bottom-border' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav__item'>
                <button className='nav__link nav__link_rectangle'>
                  Sign in 
                </button>
              </li>
            </ul>
        </nav>
        </header>
      );
    }

    if (!loggedIn && windowWidth <= 600) {
      return (
        <div className='header__hamburger'>
          <button
            className={headerHamburgerButtonClassName}
            type='button'
            onClick={toggleHamburger}
          ></button>
          <nav
            className={headerHamburgerMenuClassName}
            onClick={handleNavClick}
          >
            <ul className='header__hamburger-menu-container'>
              <li className='header__hamburger-menu-item'>
                <Link className='header__hamburger-link nav__bottom-border' to='/'>
                  Home
                </Link>
              </li>
              <li className='header__hamburger-menu-item'>
                <button className='header__hamburger-link'>
                  Sign in 
                </button>
              </li>
            </ul>
          </nav>
        </div>
      );
    }

    if (loggedIn && windowWidth > 600) {
      return (
      <header className='header header__section'>
        <nav className='nav__section'>
          <ul className='nav__menu'>
            <li className='nav__item'>
              <Link className='nav__link nav__bottom-border' to='/'>
                Home
              </Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link nav__bottom-border' to='/saved-news'>
                Saved articles
              </Link>
            </li>
            <li className='nav__item nav__wrapper'>
                <p className='nav__link nav__link-username'>Elise</p>
                <button className='nav__link-logout nav__link-logout-light' onClick={onLogout} /> 
            </li>
          </ul>
        </nav>
      </header> 
      );
    }

    return (
      <div className='header__hamburger'>
        <button
          className={headerHamburgerButtonClassName}
          type='button'
          onClick={toggleHamburger}
        ></button>
        <nav
          className={headerHamburgerMenuClassName}
          onClick={handleNavClick}
        >
          <ul className='header__hamburger-menu-container'>
            <li className='header__hamburger-menu-item'>
              <Link className='header__hamburger-link nav__bottom-border' to='/'>
                Home
              </Link>
            </li>
            <li className='header__hamburger-menu-item'>
            <Link className='header__hamburger-link' to='/saved-news'>
              Saved articles
            </Link>
            </li>
            <li className='nav__item nav__wrapper'>
                <p className='nav__link nav__link-username nav__link-logout-light header__hamburger-username'>Elise</p>
                <button className='nav__link-logout header__hamburger-logout' onClick={onLogout} />
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  return (
    <header
      className={`${
        isDropDownOpen && windowWidth <= 600
          ? `header header__menu header__menu-open`
          : ` header header__menu`
      }`}
    >
     <h2 className='header__logo header__logo_light'>NewsExplorer</h2>
      <div className='header__content'>{renderHeader()}</div>
    </header>
  );
};

export default Header;



// const Header = (props) => {
// const {loggedIn} = props;
//   // const headerLogoClassName = `header__logo ${isHovering ? 'card__button-save_visible card__button-save_hover' : 'card__button-save_visible'}`

//   // is location save - dark header
//   return (
//     <header className='header header__section'>
//       <h2 className='header__logo header__logo_light'>NewsExplorer</h2>
//       <Navigation 
//         loggedIn={loggedIn}
//       />
//     </header>
//   );
// };

// export default Header;

