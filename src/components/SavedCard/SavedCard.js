// Saved card component
import React from "react";
// import card from "../data/card";
import './SavedCard.css';

const SavedCard = (props) => {
  const {card} = props;
  const [isHovering, setIsHovering] = React.useState(false);

  const cardDeleteButtonClassName = `card__button ${isHovering ? 'card__button-delete_type_visible card__button-delete_type_hover' : 'card__button-delete_type_visible'}`
  // for deleting the card 
  // const [isButtonActive, setIsButtonActive] = React.useState(false);
  //   const handleSaveClick = () => {
//     setIsButtonActive(true);
//     setIsToolTipOpen(false);
// }
//

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
      <div className='card__keyword_type_visible'>{card.keyword}</div>
      <button 
        type='button'
        className={cardDeleteButtonClassName}
        onMouseOver={(e) => handleMouseOver(e.currentTarget.key)}
        onMouseOut={(e) => handleMouseOut(e.currentTarget.key)}
        // onClick={handleSaveClick}
      />
      {isHovering && <div className='card__button-delete_type_tooltip'>Remove from saved</div>}
      <img 
        className='card__image'
        alt='img'
        src={card.img}
        // src={NewsCard.link}
        // alt={NewsCard.name}
      />
      <div className='card__content'>
        <time className='card__date'>{card.date}</time>
        <h2 className='card__title'>{card.title}</h2>
        <p className='card__text'>{card.text}</p>
        <p className='card__source'>{card.source}</p>
      </div>
    </li>
  );
}

export default SavedCard;