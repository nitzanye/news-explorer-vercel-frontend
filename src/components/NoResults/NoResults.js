import React from "react";
import './NoResults.css';
import notFound from '../../images/notFound.svg'

const NoResults = () => {
  return (
  <section className='no-results'>
    <img className='no-results__image' src={notFound} alt="" />
    <h2 className='no-results__title' >Nothing found</h2>
    <p className='no-results__text'>Sorry, but nothing matched your search terms.</p>
  </section>
  );
}

export default NoResults;
