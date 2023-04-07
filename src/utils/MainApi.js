import axios from 'axios';
import BASE_URL from './configuration';

const handleResponse = (res) =>
  res.status === 200 || 201 ? res.data : Promise.reject(`Error ${res.status}`);

// Return user information - about the current user (email and username)
export const getUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return Promise.reject(`Error ${error.response.status}`);
  }
};

//Return all articles saved by the current user
export const getSavedArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/articles`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return Promise.reject(`Error ${error.response.status}`);
  }
};

// Save new article request
export const createNewArticle = async (article) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/articles`,
      JSON.stringify(article),
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return handleResponse(response);
  } catch (error) {
    return Promise.reject(`Error ${error.response.status}`);
  }
};

// Delete saved article request - delete the stored article by _id
export const deleteArticle = async (articleId) => {
  try {
    const response = axios.delete(`${BASE_URL}/articles/${articleId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });
    return handleResponse(response);
  } catch (error) {
    return Promise.reject(`Error ${error.response.status}`);
  }
};
