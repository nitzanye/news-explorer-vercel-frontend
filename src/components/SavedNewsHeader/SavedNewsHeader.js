//  Displays information about the number of saved cards 
// And about the related requests to the "Saved articles" page
import React from "react";
import './SavedNewsHeader.css';

const SavedNewsHeader = () => {
  
  return (
    <section className='saved-news-header'>
      <h2 className='saved-news__title'>Saved articles</h2>
      <p className='saved-news__count-articles'>Elise, you have 5 saved articles</p>
      <p className='saved-news__keywords'>By keywords: <span className='saved-news__keywords_style_bold'>Nature, Yellowstone, and 2 other</span></p>
    </section>
  );
}

export default SavedNewsHeader;