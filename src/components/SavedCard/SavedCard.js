import React from "react";
import Card from "../Card/Card";
import './SavedCard.css';

const SavedCard = ({ card, onDelete }) => {
  const [isHovering, setIsHovering] = React.useState(false);
  const cardDeleteButtonClassName = `card__button ${isHovering ? 'card__button-delete_type_visible card__button-delete_type_hover' : 'card__button-delete_type_visible'}`

  const handleDelete = () => {
    onDelete(card._id)  
  }

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {  
    setIsHovering(false);
  }

  return (
    <Card card={card} >
      <div className='card__keyword_type_visible'>{card.keyword}</div>
      <button 
        type='button'
        className={cardDeleteButtonClassName}
        onMouseOver={(e) => handleMouseOver(e.currentTarget.key)}
        onMouseOut={(e) => handleMouseOut(e.currentTarget.key)}
        onClick={handleDelete}
      />
      {isHovering && <div className='card__button-delete_type_tooltip'>Remove from saved</div>}
    </Card>
  );
}

export default SavedCard;
