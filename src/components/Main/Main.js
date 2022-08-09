import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import './Main.css';
import  Header from '../Header/Header';

const Main = ({ onSubmit, loggedIn, onLogin, onLogout, onRegister, popupOpened }) => {
  return (
    <>
    <section className='main__section'>
    <Header 
      loggedIn={loggedIn}
      onLogin={onLogin}
      onLogout={onLogout}
      onRegister={onRegister}
      popupOpened={popupOpened}
    />
    
      <div className='main__container'>
        <h1 className='main__title'>What's going on in the world?</h1>
        <p className='main__text'>Find the latest news on any topic and save them in your personal account.</p>
        <SearchForm  onSubmit={onSubmit} />
      </div>
    </section>
    </>
  );
}

export default Main;
