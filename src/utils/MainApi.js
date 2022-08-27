class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResStatus = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };

  // Return user information - about the current user (email and username) 
  getUserData = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'Get',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(this._checkResStatus);
  };

    // Return all articles saved by the current user 
    getSavedArticles = () => {
      return fetch(`${this._baseUrl}/articles`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(this._checkResStatus);
    };

  // Save new article request 
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

 // Delete saved article request - delete the stored article by _id
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
