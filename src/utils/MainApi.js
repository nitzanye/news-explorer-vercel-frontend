// The first file will contain a description of requests to your API
// Write this code in vanilla JS using fetch()

// To get data about saved cards, send a GET request to /articles of your API. //
// DELETE request : In the upper-right corner, there should be a trash icon. Clicking on it removes the card from the saved cards by sending a request to /articles/articleId of your API. //

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResStatus = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };

  // return user information - about the logged-in user (email and username) 
  // get request - endpoint '/users/me'
  getUserData = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'Get',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(this._checkResStatus);
  };

    // return all articles saved by the user endpoint? '/articles' ? add get request ?
    getSavedArticles = () => {
      return fetch(`${this._baseUrl}/articles`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(this._checkResStatus);
    };

  // post request to my api 
 createNewArticle = (article) => {
  return fetch(`${this._baseUrl}/articles`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  })
  .then(this._checkResStatus);
 };

 // delete request - /articles/:articleId - delete the stored article by _id
deleteArticle = (articleId) => {
  return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResStatus);
  };
}

const BASE_URL = 'https://api.news-nitzan.students.nomoredomainssbs.ru';

// const BASE_URL = 
// process.env.NODE_ENV === 'production'
// ? 'https://api.news-nitzan.students.nomoredomainssbs.ru'
// : 'http://localhost:3000';

export default new MainApi({
  baseUrl: BASE_URL,
});