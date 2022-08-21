import React from 'react';
import './NewsCard.css';
import Card from '../Card/Card';

const NewsCard = ({ card, loggedIn, onSave, savedArticles }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const isSaved = savedArticles.some((savedArticle) => savedArticle.url === card.url);
  
  const handleSave = () => {
    onSave(card)
  }
  
  const handleMouseOver = () => {
    setIsHovering(true);
}

  const handleMouseOut = () => {  
    setIsHovering(false);
}

  return (
    <Card card={card} >
        <div className='card__keyword_type_hidden'>{card.keyword}</div>
        <button 
          type='button'
          className={loggedIn && isSaved ? 'card__button-save_active' : 'card__button-save'}
          onMouseOver={(e) => handleMouseOver(e.currentTarget.key)}
          onMouseOut={(e) => handleMouseOut(e.currentTarget.key)}
          onClick={handleSave}
        />
        {!loggedIn && (
          <div 
            className={`tooltip ${isHovering ? 'tooltip-visible' : ''}`}
          >
          Sign in to save articles
          </div>
        )}
    </Card>
  );
 }

export default NewsCard;
