// the components of the page with saved article page
import React from "react";
// import NewsCard from "../NewsCard/NewsCard";
import SavedCard from "../SavedCard/SavedCard";
import '../SavedCard/SavedCard.css';
import './SavedNews.css';
import card from "../data/card";
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsSection from "../SavedNewsSection/SavedNewsSection";

// import NewsCardList from "../NewsCardList/NewsCardList";

const SavedNews = ({ loggedIn, onLogin, onLogout }) => {
  return (
  <>
    <Header 
      loggedIn={loggedIn}
      onLogin={onLogin}
      onLogout={onLogout}
    /> 
    <SavedNewsHeader />
    <SavedNewsSection>
       <ul className='saved-cards__grid'>
        {card.map((card) => (
          <SavedCard 
          key={card._id}
          card={card}
        />
        ))}
      </ul> 
    </SavedNewsSection>
  </>
  );
}

export default SavedNews;
