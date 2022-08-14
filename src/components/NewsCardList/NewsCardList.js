// The component that controls the rendering of cards on pages and their amount
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import '../NewsCard/NewsCard.css';
import './NewsCardList.css';
import card from "../data/card";

const NewsCardList = ({loggedIn}) => {
  // const card = {card}
 return (
  <section className='cards-list'>
    <div className='cards-list__container'>
      <h2 className='cards-list__title'>Search results</h2>
      <ul className='cards-list__grid'>
        {card.map((card) => (
          // console.log(card)
          <NewsCard 
          key={card._id}
          card={card}
          loggedIn={loggedIn}
        />
        ))}
      </ul> 
      <button
        type='button' 
        className='show-more__button'
        // onClick={}
        >
        Show more
      </button>
    </div>
  </section>
 );
}

export default NewsCardList;
