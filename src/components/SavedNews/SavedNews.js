// the components of the page with saved article page
import React from "react";
import SavedCard from "../SavedCard/SavedCard";
// import '../SavedCard/SavedCard.css';
import './SavedNews.css';
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

const SavedNews = ({ loggedIn, onLogin, onLogout, savedArticles, onDelete, currentUser }) => {
  return (
  <>
    <Header 
      loggedIn={loggedIn}
      onLogin={onLogin}
      onLogout={onLogout}
      currentUser={currentUser}
    /> 
    <SavedNewsHeader savedArticles={savedArticles} currentUser={currentUser}/>

    <section className='saved-news'>
      {/* {children} */}
       <ul className='saved-cards__grid'>
        {savedArticles.map((article) => {

        return (
          <SavedCard 
          card={article}
         
          key={article._id}
          onDelete={onDelete}
        />
        );  
      })}
      </ul> 
      </section>
   
  </>
  );
}

export default SavedNews;
