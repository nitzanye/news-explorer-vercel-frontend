// The component that responsible for the navigation menu

// import React from "react";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useWindowDimensions } from "../../hooks/useWindowDimensions";
// import './Navigation.css';
// // import headerIcon from '../../images/headerIcon.svg';

// const Navigation = (props) => {
//   const { loggedIn, handleLogOut } = props;
//   // // if logged in show saved news header

//   const windowWidth = useWindowDimensions();
//   const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

//   const headerHamburgerButtonClassName =`${isDropDownOpen
//       ? `header__hamburger-icon header__hamburger-close`
//       : `header__hamburger-icon`}`

//   const headerHamburgerMenuClassName = `${isDropDownOpen
//       ? `header__hambuger-menu header__hamburger-menu_visible`
//       : `header__hambuger-menu`}`

//   const toggleHamburger = () => setIsDropDownOpen(!isDropDownOpen);
//   const handleNavClick = () => setIsDropDownOpen(false);

//   React.useEffect(() => {
//     setIsDropDownOpen(false);
//   }, [setIsDropDownOpen]);

//   const renderHeader = () => {
//     if (!loggedIn && windowWidth > 600) {
//       return (
//         <nav className='nav__section'>
//           <ul className='nav__menu'>
//             <li className='nav__item'>
//               <Link className='nav__link nav__link-home' to='/'>
//                 Home
//               </Link>
//             </li>
//             <li className='nav__item'>
//               <button className='nav__link nav__link_rectangle'>
//                 Sign in 
//               </button>
//             </li>
//           </ul>
//       </nav>
//       );
//     }

//     if (!loggedIn && windowWidth <= 600) {
//       return (
//         <div className='header__hamburger'>
//           <button
//             className={headerHamburgerButtonClassName}
//             type='button'
//             onClick={toggleHamburger}
//           ></button>
//           <nav
//             className={headerHamburgerMenuClassName}
//             onClick={handleNavClick}
//           >
//             <ul className='header__hamburger-menu-container'>
//               <li className='header__hamburger-menu-item'>
//                 <Link className='header__hamburger-link' to='/'>
//                   Home
//                 </Link>
//               </li>
//               <li className='header__hamburger-menu-item'>
//                 <button className='header__hamburger-link'>
//                   Sign in 
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       );
//     }

//     if (loggedIn && windowWidth > 600) {
//       return (
//       <nav className='nav__section'>
//         <ul className='nav__menu'>
//           <li className='nav__item'>
//             <Link className='nav__link nav__link-home' to='/'>
//               Home
//             </Link>
//           </li>
//           <li className='nav__item'>
//             <Link className='nav__link nav__link-home' to='/saved-news'>
//               Saved articles
//             </Link>
//           </li>
//           <li className='nav__item nav__wrapper'>
//               <button className='nav__link nav__link-logout' onClick={handleLogOut}>
//                 <span className='current-user'>Elise</span> 
//               </button>
//           </li>
//         </ul>
//       </nav>
//       );
//     }

//     return (
//       <div className='header__hamburger'>
//         <button
//           className={headerHamburgerButtonClassName}
//           type='button'
//           onClick={toggleHamburger}
//         ></button>
//         <nav
//           className={headerHamburgerMenuClassName}
//           onClick={handleNavClick}
//         >
//           <ul className='header__hamburger-menu-container'>
//             <li className='header__hamburger-menu-item'>
//               <Link className='header__hamburger-link' to='/'>
//                 Home
//               </Link>
//             </li>
//             <li className='header__hamburger-menu-item'>
//             <Link className='header__hamburger-link' to='/saved-news'>
//               Saved articles
//             </Link>
//             </li>
//             <li className='nav__item nav__wrapper'>
//                 <button className='header__hamburger-logout' onClick={handleLogOut}>
//                   <span className='header__hamburger-username'>Elise</span> 
//                 </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     );
//   };

//   return (
//     <header
//       className={`${
//         isDropDownOpen && windowWidth <= 600
//           ? `header header__menu header__menu-open`
//           : ` header header__menu`
//       }`}
//     >
//       {/* <img
//         className='logo logo__image'
//         src={logo}
//         id='logo'
//         alt='Around the U.S.'
//       /> */}
//       <div className='header__content'>{renderHeader()}</div>
//     </header>
//   );
// };

// export default Navigation;

    // <nav className='nav__section'>
    //   <ul className='nav__menu'>
    //     <li className='nav__item'>
    //       <Link className='nav__link nav__link-home' to='/'>
    //         Home
    //       </Link>
    //     </li>
    //     <li className='nav__item'>
    //       <Link className='nav__link nav__link-home' to='/saved-news'>
    //         Saved articles
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  

// conditions 

//  const renderHeader = () => {
//   if (!loggedIn) {
//     return (
//       <nav className='nav__section'>
//         <ul className='nav__menu'>
//           <li className='nav__item'>
//             <Link className='nav__link nav__link-home' to='/'>
//               Home
//             </Link>
//           </li>
//           <li className='nav__item'>
//             <Link className='nav__link nav__link_rectangle' to='/signin'>
//               Sign in 
//             </Link>
//           </li>
//         </ul>
//     </nav>
//     );
//   }

  // if (loggedIn && ) {
  //   return (
  //     <nav className='nav__section'>
  //       <ul className='nav__menu'>
  //         <li className='nav__item'>
  //           <Link className='nav__link nav__link-home' to='/'>
  //             Home
  //           </Link>
  //         </li>
  //         <li className='nav__item'>
  //           <Link className='nav__link nav__link-home' to='/saved-news'>
  //             Saved articles 
  //           </Link>
  //         </li>
  //         <li className='nav__item nav__wrapper'>
  //           <Link className='nav__link nav__link-logout' to='/signin'>
  //             <span className='current-user'>Elise</span> 
  //           </Link>
  //         </li>
  //       </ul>
  //   </nav>
  //   );
  // }

  