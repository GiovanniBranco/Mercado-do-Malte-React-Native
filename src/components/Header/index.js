import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import Geladeira from 'react-native-vector-icons/MaterialCommunityIcons';

import storage from '../../utils/storage';

import cores from '../../styles/cores';
import geral from '../../styles/geral';
import styles from './style';

const Header = props => {
  const [token, setToken] = useState('');

  const isLogado = async () => {
    let token = await storage.getToken();
    setToken(token);
  };

  useEffect(() => {
    isLogado();
  }, []);

  return !token ? (
    <View style={styles.container}>
      <IconButton
        icon="menu"
        color={cores.green500}
        size={30}
        onPress={() => props.navigation.openDrawer()}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={geral.tituloVerde}>Mercado do Malte</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <IconButton
        icon="menu"
        color={cores.green500}
        size={30}
        onPress={() => props.navigation.openDrawer()}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={geral.tituloVerde}>Mercado do Malte</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Geladeira')}>
        <Geladeira name="fridge" size={33} style={styles.geladeira} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
