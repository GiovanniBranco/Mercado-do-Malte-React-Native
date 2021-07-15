import apiUsuario from '../services/api-usuario';

import storage from '../utils/storage';

const obterUser = async username => {
  const user = await apiUsuario.obterUser(username, {responseType: 'text'});
  if (user.status !== 200) throw new Error('Erro!');
  storage.storeUserCompleto(user.data);
  return user.data;
};

export default obterUser;
