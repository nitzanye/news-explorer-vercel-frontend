import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import './Main.css';

const Main = ({ onSubmit }) => {
  return (
    <section className='main__section'>
      <div className='main__container'>
        <h1 className='main__title'>What's going on in the world?</h1>
        <p className='main__text'>Find the latest news on any topic and save them in your personal account.</p>
        <SearchForm  onSubmit={onSubmit} />
      </div>
    </section>
  );
}

export default Main;
