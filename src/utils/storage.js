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
  }
};

const salvarCliente = async value => {
  try {
    await AsyncStorage.setItem('@storage_Cliente', value);
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

const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem('@storage_Token');
    console.log('Token deletado');
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  storeToken,
  salvarCliente,
  getCliente,
  getToken,
  deleteToken,
};
