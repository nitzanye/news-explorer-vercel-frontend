//  Displays information about the number of saved cards 
// And about the related requests to the "Saved articles" page
import React from "react";
import './SavedNewsHeader.css';

const SavedNewsHeader = () => {

// const keywords = Nature, Yellowstone, and 2 other'
  
  return (
    <section className='saved-news-header__section'>
      <h2 className='saved-news__title'>Saved articles</h2>
      <p className='saved-news__count-articles'>Elise, you have 5 saved articles</p>
      <p className='saved-news__keywords'>By keywords: Nature, Yellowstone, and 2 other</p>
    </section>
  );
}

export default SavedNewsHeader;