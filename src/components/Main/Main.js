import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import './Main.css';
import  Header from '../Header/Header';
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import BackgroundWrraper from "../BackgroundWrraper/BackgroundWrraper";

const Main = ({ onSubmit, loggedIn, onLogin, onLogout, onRegister, popupOpened, searchSubmit }) => {
  return (
    <main>
      <BackgroundWrraper>
        <Header 
          loggedIn={loggedIn}
          onLogin={onLogin}
          onLogout={onLogout}
          onRegister={onRegister}
          popupOpened={popupOpened}
        />
        <SearchForm  onSubmit={onSubmit} />
      </BackgroundWrraper>
      {searchSubmit && <NewsCardList loggedIn={loggedIn}/>}
      <About />
    </main>
  );
}

export default Main;

//
// return (
//   <main>
//     <div className='bg-wrraper'>
//       <Header 
//         loggedIn={loggedIn}
//         onLogin={onLogin}
//         onLogout={onLogout}
//         onRegister={onRegister}
//         popupOpened={popupOpened}
//       />
//       <SearchForm  onSubmit={onSubmit} />
//     </div>
//     {searchSubmit && <NewsCardList loggedIn={loggedIn}/>}
//     <About />
//   </main>
// );