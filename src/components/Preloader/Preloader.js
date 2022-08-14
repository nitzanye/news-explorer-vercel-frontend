import React from "react";
import './Preloader.css';

const Preloader = () => {
  return (
    <section className='preloader'>
       <i className='circle-preloader' />
       <h2 className='preloader__title'>Searching for news...</h2>
    </section>
  );
}

export default Preloader;
