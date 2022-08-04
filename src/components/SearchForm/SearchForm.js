// The search form for the user to enter their search request

import React from "react";
import { Link } from 'react-router-dom';
import './SearchForm.css';

const SearchForm = () => {
   
  return (
    <section className='search__section'>
      <form
        className='search__container'
      //   name={name}
      //   onSubmit={onSubmit}
      //   noValidate
      >
          <h1 className='search__title'>What's going on in the world?</h1>
          <p className='search__text'>Find the latest news on any topic and save them in your personal account.</p>
          <div className='search__wrapper'>
              <input
                id='search-input'
                type='text'
                className='search__input'
              //   name=''
                placeholder='Enter topic'
              //   minLength="2"
              //   maxLength="40"
              //   value={name}
              //   onChange={handleChangeSearch}
                required
              />
              {/* <span
                id='search__input-error'
                className='search__input-error'
              >
                  Error Message
              </span> */}
              <button
                type='submit'
                className='search__button'
              //   onSubmit={handleSubmit}
              >
                  Search
              </button>
          </div>
      </form>
    </section>
  );
}

export default SearchForm;