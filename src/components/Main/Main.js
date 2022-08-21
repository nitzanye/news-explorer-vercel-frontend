import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import './Main.css';
import  Header from '../Header/Header';
import About from "../About/About";
import BackgroundWrraper from "../BackgroundWrraper/BackgroundWrraper";
import Results from "../Results/Results";
import Preloader from '../Preloader/Preloader';
import NoResults from "../NoResults/NoResults";

const Main = ({ 
  onSubmit, 
  loggedIn, 
  articles, 
  onLogin, 
  onLogout, 
  onRegister, 
  popupOpened, 
  searchSubmit, 
  isDataLoading, 
  onSave, 
  savedArticles,
  keyword, 
  currentUser,
  }) => {
  return (
    <main>
      <BackgroundWrraper>
        <Header 
          loggedIn={loggedIn}
          onLogin={onLogin}
          onLogout={onLogout}
          onRegister={onRegister}
          popupOpened={popupOpened}
          currentUser={currentUser}
        />
        <SearchForm  onSubmit={onSubmit} />
      </BackgroundWrraper>
      { isDataLoading ?
        <Preloader /> : <></>
      }
      {searchSubmit && !(articles.length > 0) 
        ? 
        (<NoResults />)
        : 
        (searchSubmit && <Results   
          loggedIn={loggedIn} 
          articles={articles} 
          onSave={onSave} 
          savedArticles={savedArticles}
          keyword={keyword} />)
        }

      <About />
    </main>
  );
}

export default Main;
