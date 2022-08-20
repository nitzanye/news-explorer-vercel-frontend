// const BASE_URL = 
// process.env.NODE_ENV === 'production'
// ? 'https://api.news-nitzan.students.nomoredomainssbs.ru'
// : 'http://localhost:3000';

const BASE_URL = 'https://api.news-nitzan.students.nomoredomainssbs.ru';



const handleResponse = (res) => 
  res.ok ? res.json() : Promise.reject(`Error ${res.status}`);


// create a user with the password, email and username in the body - 
// post request to '/' or '/signup' 
export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  }).then(handleResponse);
};

// check the auth of the usre with his email and password in the body 
// post request to endpoint '/' or '/signin'
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json', 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const checkUerToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};