// The Card component - used for: NewsCard and SavedCard components 
import React from "react";
import './Card.css';

const Card = ({card, children}) => {
  const date = new Date(card.publishedAt);
  const formatedDate = date.toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <article 
      className='card__container'
    >
      {children}
      <img 
          className='card__image'
          alt={card.title}
          src={card.urlToImage}
        />
        <div className='card__content'>
          <div className='card__date'>{formatedDate}</div>
          <a href={card.url} className='card__link' target='_blank' rel='noreferrer'>
            <h2 className='card__title'>{card.title}</h2>
            <p className='card__text'>{card.content}</p>
          </a>
          <p className='card__source'>{card.source.name}</p>
        </div>
    </article>
  );
} 

export default Card;
