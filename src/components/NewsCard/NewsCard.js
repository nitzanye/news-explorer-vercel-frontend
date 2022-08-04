// The news card component
import React from 'react';
import './NewsCard.css';
import card from '../data/card';

// import dogImage from '../../images/dogImage.png';
// import natureImage from '../../images/natureImage.png';
// import parksImage from '../../images/parksImage.png';

const NewsCard = (props) => {
  const {card} = props;
  const [isHovering, setIsHovering] = React.useState(false);
  const [isTooltipOpen, setIsToolTipOpen] = React.useState(false);

  const [isButtonActive, setIsButtonActive] = React.useState(false);

  const cardSaveButtonClassName = `card__button ${isHovering ? 'card__button-save_visible card__button-save_hover' : 'card__button-save_visible'}`
  const cardToolTipClassName = isTooltipOpen ? <div className='card__button-save_tooltip'>Sign in to save articles</div> : ''
  // is save? show keyword , else hide it

  const handleSaveClick = () => setIsButtonActive(true);
  // isButtonActive ? 'card__button-save_active'  :
  
  const handleMouseOver = () => {
    setIsHovering(true);
    setIsToolTipOpen(true);
}

  const handleMouseOut = () => {  
    setIsHovering(false);
    setIsToolTipOpen(false);
}

  return (
      <li 
        className='card__container'
        key={card._id}
        // key={article._id}
      >
        <div className='card__keyword_visible'>{card.keyword}</div>
        <button 
          type='button'
          className={isButtonActive ? 'card__button card__button-save_active' : cardSaveButtonClassName}
          onMouseOver={(e) => handleMouseOver(e.currentTarget.key)}
          onMouseOut={(e) => handleMouseOut(e.currentTarget.key)}
          onClick={handleSaveClick}
        />
        {isHovering && <div className='card__button-save_tooltip'>Sign in to save articles</div>}
        <img 
          className='card__image'
          alt='img'
          src={card.img}
          // src={dogImage}
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

// const handleSaveClick = () => setIsButtonActive(true);

//   const handleMouseOver = (e) => {
//     if (e.currentTarget === e.target) {
//     setIsHovering(true);
//   }
// }

// isButtonActive? 'card__button-save_active' :