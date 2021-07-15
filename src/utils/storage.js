import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async value => {
  try {
    await AsyncStorage.setItem('@storage_Token', value);
  } catch (error) {
    console.log(error);
  }
};
const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Token');
    if (value === null || value === undefined) {
      return null;
    } else {
      return value;
    }
  } catch (error) {
    console.log(error);
    return console.log('Fui no catch');
  }
};

const storeUserCompleto = async user => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@storage_User', jsonValue);
  } catch (error) {
    console.log('Deu erro na hora de salvar o user' + error.message);
  }
};

const getUserCompleto = async () => {
  try {
    const user = await AsyncStorage.getItem('@storage_User');
    if (user === null || user === undefined) {
      return null;
    } else {
      console.log(user);
      return user;
    }
  } catch (error) {
    console.log(error.message);
  }
};
const salvarCliente = async value => {
  try {
    await AsyncStorage.setItem('@storage_Cliente', value);
    console.log(getCliente());
  } catch (error) {
    console.log(error);
  }
};
const getCliente = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Cliente');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

const storePedido = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Pedido', jsonValue);
  } catch (error) {
    console.log(error);
  }
};

const getPedido = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Pedido');
    return jsonValue !== null ? jsonValue : null;
  } catch (error) {
    console.log(error);
  }
};

const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem('@storage_Token');
    await deleteUserCompleto();
    console.log('Token deletado');
  } catch (error) {
    console.log(error.message);
  }
};
const deleteUserCompleto = async () => {
  try {
    await AsyncStorage.removeItem('@storage_User');
    console.log('User deletado');
  } catch (error) {
    console.log(error.message);
  }
};
const deletePedido = async () => {
  try {
    await AsyncStorage.removeItem('@storage_Pedido');
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  storeToken,
  storePedido,
  salvarCliente,
  getCliente,
  getToken,
  getPedido,
  deleteToken,
  deletePedido,
  getUserCompleto,
  storeUserCompleto,
};
