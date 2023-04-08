import axios from 'axios';
import BASE_URL from './configuration';
import { SUCCESS_OK, SUCCESS_CREATED } from './variables';

const handleResponse = (res) =>
  res.status === SUCCESS_OK || SUCCESS_CREATED
    ? res.data
    : Promise.reject(`Error ${res.status}`);

export const register = async (email, password, name) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, {
      email,
      password,
      name,
    });
    return handleResponse(response);
  } catch (error) {
    return Promise.reject(`Error ${error.response.status}`);
  }
};

export const authorize = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, {
      email,
      password,
    });
    return handleResponse(response);
  } catch (error) {
    return Promise.reject(`Error ${error.response.status}`);
  }
};

export const checkUerToken = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return Promise.reject(`Error ${error.response.status}`);
  }
};
