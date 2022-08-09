import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Register from '../Register/Register';
import './App.css';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import SearchForm from '../SearchForm/SearchForm';
// import SearchForm from '../SearchForm/SearchForm';

// The root component of the application, created by CRA

// 3 conditions if its preload || if its not found || if its got results 

const App = () => {

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  // const [cardListOpen, setCardListOpen] = React.useEffect(false);

  const [searchSubmit, setSearchSubmit] = React.useState(false);
 
 
  // const [textField, setTextField] = React.useState('');

  const handleSearchSubmit = () => {
    setSearchSubmit(true);

  }

  const navigate = useNavigate();
  
  const handleUserLogin = (email, password) => {
    if (!email || !password) {
      return console.log('Error.....');
    }
    setLoggedIn(true);

    closeAllPopups();
  }

  const popupOpened = isLoginPopupOpen || isRegisterPopupOpen || isInfoTooltipOpen;
  
  const handleLogin = () => {
     closeAllPopups();
     setIsLoginPopupOpen(true);
  }
  
  const handleUserRegister = (email, password, username) => {
    if (!email || !password || !username) {
      return console.log('Error.....');
    }
    // setLoggedIn(true);
    closeAllPopups();
    setIsInfoTooltipOpen(true);
  };

  const handleLogOut = () => {
    // navigate('/');
    setLoggedIn(false);
  };

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOpen(false);
  };

  const handleClickOutside = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closeAllPopups();
    }
  };

  React.useEffect(() => {
    const handleEscape = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    };

    
    // popupOpened && document.addEventListener('click', handleClickOutside);
    popupOpened && document.addEventListener('keydown', handleEscape);

    return () => {
      // document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [popupOpened]);

  const switchPopup = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
  }

  return (
    <div className='page'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              {/* <Header 
                loggedIn={loggedIn}
                onLogin={handleLogin}
                onLogout={handleLogOut}
                onRegister={handleUserRegister}
                popupOpened={popupOpened}
               
              /> */}
              <Main 
              onSubmit={handleSearchSubmit} 
              loggedIn={loggedIn}
              onLogin={handleLogin}
              onLogout={handleLogOut}
              onRegister={handleUserRegister}
              popupOpened={popupOpened}
              />

              {searchSubmit && <NewsCardList loggedIn={loggedIn}/>}
              <About />
            </>
        }
        >
        </Route>
        <Route
          path='/saved-news'
          element={
            <>
              {/* <Header 
                loggedIn={loggedIn}
                onLogin={handleLogin}
                onLogout={handleLogOut}
              /> */}
              <SavedNews 
                loggedIn={loggedIn}
                onLogin={handleLogin}
                onLogout={handleLogOut}
              />
            </>
          }
        >
        </Route>
      </Routes>

      <Login 
        onSubmit={handleUserLogin} 
        loggedIn={loggedIn} 
        onClose={closeAllPopups} 
        isOpen={isLoginPopupOpen} 
        onOutsideClick={handleClickOutside}
        onSwitchPopup={switchPopup}
      />
      
      <Register 
        onSubmit={handleUserRegister} 
        loggedIn={loggedIn} 
        onClose={closeAllPopups} 
        isOpen={isRegisterPopupOpen}
        onOutsideClick={handleClickOutside}
        onSwitchPopup={switchPopup}
      />
      
      <InfoTooltip 
        onClose={closeAllPopups}
        isOpen={isInfoTooltipOpen}
        onOutsideClick={handleClickOutside}
        onLoginClick={handleLogin}
        
      />

      <Footer />

    </div>
  );
};

export default App;
