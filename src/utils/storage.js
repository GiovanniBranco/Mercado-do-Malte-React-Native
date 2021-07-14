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
      console.log('O token ta zerado');
      return null;
    } else {
      console.log(value);
      return value;
    }
  } catch (error) {
    console.log(error);
    return console.log('Fui no catch');
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
      console.log('O username é: ' + value);
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
    console.log('Token deletado');
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
};
