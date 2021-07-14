import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconButton, Searchbar} from 'react-native-paper';

import cores from '../../styles/cores';
import geral from '../../styles/geral';
import styles from "./style";

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <IconButton icon="menu" color={cores.green500} size={30} />
      <Text style={geral.tituloVerde}>Mercado do Malte</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
