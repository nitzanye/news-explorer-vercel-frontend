// The search form for the user to enter their search request

import React from "react";
import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {
  const [placeholder, setPlaceHolder] = React.useState('Enter topic');
  const [query, setQuery] = React.useState('');
  const [isButtonClicked, setIsButtonClicked ] = React.useState(false);
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);

  const handleSearchChange = (e) => setQuery(e.target.value);  
  const searchButtonClassName = `search__button ${isButtonHovered ? 'search__button-over' : ''} ${isButtonClicked ? 'search__button-active' : ''}`;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query === '') {
      return setPlaceHolder('Text is not entered');
    }
    onSubmit(query);
  }
  
  return (
    <section className='search'>
      <h1 className='search__title'>What's going on in the world?</h1>
      <p className='search__text'>Find the latest news on any topic and save them in your personal account.</p>
      <form
        className='search__container'
         onSubmit={handleSearchSubmit}
      >
          <div className='search__wrapper'>
              <input
                type='text'
                className='search__field'
                placeholder={placeholder}
                value={query}
                onChange={handleSearchChange}
              />
              <button
                type='submit'
                className={searchButtonClassName}
                onMouseDown={() => {setIsButtonClicked(true)}}
                onMouseUp={() => {setIsButtonClicked(false)}}
                onMouseOver={() => {setIsButtonHovered(true)}}
                onMouseOut={() => {setIsButtonHovered(false)}}
              >
                  Search
              </button>
          </div>
      </form>
    </section>
  );
}

export default SearchForm;
