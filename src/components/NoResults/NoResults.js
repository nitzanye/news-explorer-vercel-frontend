import React from "react";
import './NoResults.css';
import notFound from '../../images/notFound.png';

const NoResults = () => {
  return (
  <section className='no-results__section'>
    <img className='no-results__image' src={notFound} alt="" />
    <h2 className='no-results__title' >Nothing found</h2>
    <p className='no-results__text'>Sorry, but nothing matched your search terms.</p>
  </section>
  );
}

export default NoResults;