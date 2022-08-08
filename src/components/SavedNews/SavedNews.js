// the components of the page with saved article page
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import SavedCard from "../SavedCard/SavedCard";
import '../SavedCard/SavedCard.css';
import './SavedNews.css';
import card from "../data/card";

// import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";


const SavedNews = () => {
  return (
    <section className='saved-news__section'>
      <SavedNewsHeader />
    <div className='saved-news__container'>
       <ul className='saved-cards__grid'>
        {card.map((card) => (
          // console.log(card)
          <SavedCard 
          key={card._id}
          card={card}
        />
        ))}
      </ul> 
    </div>
  </section > 
  );
}

export default SavedNews;
