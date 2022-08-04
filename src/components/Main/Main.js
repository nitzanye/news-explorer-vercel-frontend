// The components of the main page
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import NoResults from "../NoResults/NoResults";

// move the no results to app component for few conditions

const Main = () => {
  return (
    <>
      <SearchForm />
      <NoResults />
      <NewsCardList 
      />
      <About />
    </>
  )
}

export default Main;

// if (!loggedIn || !isSearchNews) {
//   return (
//     <SearchForm />
//     <About />
//   )
// } 

// if (!loggedIn && isSearchNews) {
//   return (
//     <SearchForm />
//     <Preloader />
//     <About />
//   )
// }