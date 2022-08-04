// the components of the page with saved article page
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

// import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

import './SavedNews.css';
import card from "../data/card";

const SavedNews = () => {
  return (
    <section className='saved-news__section'>
      <SavedNewsHeader />
    <div className='saved-news__container'>
       <ul className='cards-list__grid'>
        {card.map((card) => (
          // console.log(card)
          <NewsCard 
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

<ul className='cards-list__grid'>
       
      </ul> 