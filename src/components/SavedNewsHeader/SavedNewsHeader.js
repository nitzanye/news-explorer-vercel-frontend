import React from "react";
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ savedArticles, currentUser}) => {

  const keywordArray = savedArticles.map((article) => article.keyword);
  let modeMap = {}

  for (let el of keywordArray) {
    if (!modeMap[el]) modeMap[el] = 0 
    modeMap[el]++
  }

  const modeMapToKeywordArray = Object.entries(modeMap)
  const sortedArray = modeMapToKeywordArray.sort((a,b) => b[1] - a[1])
 
  const sortedElements = sortedArray.map(el => ` ${el[0]}`)
  const commaSeparetedElements = sortedElements.join( ', ')

  const first2 = sortedElements.slice(0, 2).join(', ');

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news__title'>Saved articles</h2>
      <p className='saved-news__count-articles'>{currentUser.name}, you have {savedArticles.length} saved articles</p>
      <p className='saved-news__keywords'>By keywords: 
      {(sortedElements.length === 3 || sortedElements.length < 3) ? 
      (<span className='saved-news__keywords_style_bold'>
      
        {commaSeparetedElements} 
        </span>
      )  :  
      (<span className='saved-news__keywords_style_bold'>
       {first2} and {sortedElements.length - 2} other
      </span>)}
      </p>
    </section>
  );
}

export default SavedNewsHeader;
