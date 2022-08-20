// contain a description of requests to the newsapi.org service
// Write this code in vanilla JS using fetch()
// Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.

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
    // const weekAgo = currentDate.setDate(currentDate.getDate() - 7);
      //7 (days) * 24 (hours) * 60 (minutes) * 60 (seconds) * 1000 (milliseconds ) = 604800000 (7 days in milliseconds).//
    const weekAgo= new Date(new Date().setDate(new Date().getDate() - 7));

    // const weekAgo= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    return fetch(`${this._baseUrl}/everything?q=${query}&from=${weekAgo}&to=${currentDate}&pageSize=100&apiKey=${this._key}`, {
      method: 'GET',
    })
    .then(this._checkResStatus);
  };
}
 
  // local 
  const BASE_URL = 'https://newsapi.org/v2';

  // my key
  const KEY = '23fd86a148f34abf985d1cb9ad256556';


  export default new NewsApi({
    baseUrl: BASE_URL,
    key: KEY,
  });


  // before publishing your application, make sure to change the service address to the Practicum proxy server. //
  // And here is an example of the same request routed through a proxy server: //
  // GET https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=[your_key] //

   // proxy practicum service 
  // const BASE_URL = 'https://nomoreparties.co/news/v2';