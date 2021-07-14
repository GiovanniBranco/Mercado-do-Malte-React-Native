import axios from 'axios';
import storage from '../utils/storage';

const API = axios.create({
  baseURL: 'https://ecommerce-serratec.herokuapp.com/',
});

function defineHeaderAuthorization() {
  async function recuperarToken() {
    const token = await storage.getToken();

    API.defaults.headers.commom['Authorization'] = token;
  }
  recuperarToken();
}

defineHeaderAuthorization();

export default API;
