// Contain a description of requests to the newsapi.org service
// For key - use Your API key / Alternatively you can provide this via the X-Api-Key HTTP header.

class NewsApi {
  constructor({ baseUrl, key }) {
    this._baseUrl = baseUrl;
    this._key = key;
  }

  _checkResStatus = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };

  getRequestNews = (query) => {
    const currentDate = new Date();
    const weekAgo= new Date(new Date().setDate(new Date().getDate() - 7));

    return fetch(`${this._baseUrl}/everything?q=${query}&from=${weekAgo}&to=${currentDate}&pageSize=100&apiKey=${this._key}`, {
      method: 'GET',
    })
    .then(this._checkResStatus);
  };
}
     // proxy practicum service 
  const BASE_URL = 'https://nomoreparties.co/news/v2';
  // const BASE_URL = 'https://newsapi.org/v2';

  const KEY = '23fd86a148f34abf985d1cb9ad256556';

  export default new NewsApi({
    baseUrl: BASE_URL,
    key: KEY,
  });
