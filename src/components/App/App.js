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
// import SearchForm from '../SearchForm/SearchForm';

// The root component of the application, created by CRA

// 3 conditions if its preload || if its not found || if its got results 

const App = () => {

  const [loggedIn, setLoggedIn] = React.useState(true);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const navigate = useNavigate();
  
  const handleUserLogin = (email, password) => {
    if (!email || !password) {
      return console.log('Error.....');
    }
    setLoggedIn(true);
  }
  
  const handleUserRegister = (email, password, username) => {
    if (!email || !password || !username) {
      return console.log('Error.....');
    }
    setLoggedIn(true);
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

  React.useEffect(() => {
    const handleClickOutside = (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    };

    const handleEscape = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className='page'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header 
                loggedIn={loggedIn}
              />
              <Main 
              
              />
            </>
          }
        >
        </Route>
        <Route
          path='/saved-news'
          element={
            <>
              <Header 
                loggedIn={loggedIn}
                handleLogOut={handleLogOut}
              />
              <SavedNews />
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
      />
      
      <Register 
        onSubmit={handleUserRegister} 
        loggedIn={loggedIn} 
        onClose={closeAllPopups} 
        isOpen={isRegisterPopupOpen}
      />
      
      <InfoTooltip 
        onClose={closeAllPopups}
        isOpen={isInfoTooltipOpen}
      />

      <Footer />

    </div>
  );
};

export default App;
