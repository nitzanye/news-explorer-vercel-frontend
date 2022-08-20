// The news card component
import React from 'react';
import './NewsCard.css';
import Card from '../Card/Card';

const NewsCard = ({ card, loggedIn, onSave, savedArticles }) => {
  const [isHovering, setIsHovering] = React.useState(false);
  // const [isClicked, setIsButtonClicked ] = React.useState(false);

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

// const date = new Date(card.publishedAt);
// const formatedDate = date.toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});

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

//
// return (
//   <article 
//     className='card__container'
//     key={card.publishedAt}
//     // key={article._id}
//   >
//     {children}
//     <div className='card__keyword_type_hidden'>{card.keyword}</div>
//     <button 
//       type='button'
//       className={loggedIn && isSaved ? 'card__button-save_active' : 'card__button-save'}
//       onMouseOver={(e) => handleMouseOver(e.currentTarget.key)}
//       onMouseOut={(e) => handleMouseOut(e.currentTarget.key)}
//       onClick={handleSave}
//     />
//     {!loggedIn && (
//       <div 
//         className={`tooltip ${isHovering ? 'tooltip-visible' : ''}`}
//       >
//       Sign in to save articles
//       </div>
//     )}
//     <img 
//       className='card__image'
//       alt='img'
//       src={card.urlToImage}
//     />
//     <div className='card__content'>
//       <div className='card__date'>{formatedDate}</div>
//       <a href={card.url} className='card__link' target='_blank'>
//         <h2 className='card__title'>{card.title}</h2>
//         <p className='card__text'>{card.content}</p>
//       </a>
//       <p className='card__source'>{card.source.name}</p>
//     </div>
//   </article>
// );