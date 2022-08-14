// The news card component
import React from 'react';
import './NewsCard.css';
// import card from '../data/card';

const NewsCard = (props) => {
  const {card, loggedIn} = props;
  const [isHovering, setIsHovering] = React.useState(false);
  const [isClicked, setIsButtonClicked ] = React.useState(false);

  const handleSaveClick = () => {
    setIsButtonClicked(true) 
}
  
  const handleMouseOver = () => {
    setIsHovering(true);
}

  const handleMouseOut = () => {  
    setIsHovering(false);
}

  return (
      <li 
        className='card__container'
        key={card._id}
        // key={article._id}
      >
        <div className='card__keyword_type_hidden'>{card.keyword}</div>
        <button 
          type='button'
          className={loggedIn && isClicked ? 'card__button-save_active' : 'card__button-save'}
          onMouseOver={(e) => handleMouseOver(e.currentTarget.key)}
          onMouseOut={(e) => handleMouseOut(e.currentTarget.key)}
          onClick={handleSaveClick}
        />
        {!loggedIn && (
          <div 
            className={`tooltip ${isHovering ? 'tooltip-visible' : ''}`}
          >
          Sign in to save articles
          </div>
        )}
        <img 
          className='card__image'
          alt='img'
          src={card.img}
          // src={NewsCard.link}
          // alt={NewsCard.name}
        />
        <div className='card__content'>
          <div className='card__date'>{card.date}</div>
          <h2 className='card__title'>{card.title}</h2>
          <p className='card__text'>{card.text}</p>
          <p className='card__source'>{card.source}</p>
        </div>
      </li>
  );
 }

export default NewsCard;
