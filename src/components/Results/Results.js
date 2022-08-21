import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import '../NewsCard/NewsCard.css';
import './Results.css';

const Results = ({loggedIn, articles, onSave, savedArticles, keyword}) => {

  // For each click render only 3 articles
  const [showMoreNews, setShowMoreNews] = React.useState(0);
  const ARTICLES_RENDERED = 3;
  const handleShowMore = () => {
    setShowMoreNews(showMoreNews + ARTICLES_RENDERED);
  }

  const articlesList = articles.slice(0, ARTICLES_RENDERED + showMoreNews);

 return (
  <section className='cards-list'>
    <div className='cards-list__container'>
      <h2 className='cards-list__title'>Search results</h2>
      <ul className='cards-list__grid'>
          {articlesList.map((card) => {
            card.keyword = keyword;
            return (
            <NewsCard 
              card={card}
              key={card.publishedAt}
              loggedIn={loggedIn}
              onSave={onSave}
              savedArticles={savedArticles}
           />
            )
      })}
      </ul> 
      {articlesList.length !== articles.length && (
      <button
        type='button' 
        className='show-more__button'
        onClick={handleShowMore}
        >
        Show more
      </button>
      )}
    </div>
  </section>
 );
}

export default Results;
