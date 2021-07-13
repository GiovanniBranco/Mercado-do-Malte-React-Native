import API from './api';

const logar = (username, senha) => {
  return new Promise((resolve, reject) => {
    return API.post('/login', {username, senha})
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

const obterUser = username => {
  return new Promise((resolve, reject) => {
    return API.get(`/cliente/${username}`)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

export default {
  logar,
  obterUser,
};
