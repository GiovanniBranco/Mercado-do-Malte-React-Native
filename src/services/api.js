import React, {useEffect} from 'react';
import axios from 'axios';
import storage from '../utils/storage';

const API = axios.create({
  baseURL: 'https://ecommerce-serratec.herokuapp.com/',
});

function defineHeaderAuthorization() {
  async function recuperarToken() {
    const token = await storage.getToken();
    if (token != null) {
      API.defaults.headers['Authorization'] = token;
    } else {
      return null;
    }
  }
  recuperarToken();
}

defineHeaderAuthorization();


export default API;
