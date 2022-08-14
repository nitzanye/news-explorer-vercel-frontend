import React from "react";
import './SavedNewsSection.css';

const SavedNewsSection = ({ children }) => {
  return (
    <section className='saved-news__container'>{children}</section>
  );
}

export default SavedNewsSection;
