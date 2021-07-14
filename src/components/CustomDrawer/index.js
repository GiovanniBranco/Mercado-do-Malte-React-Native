import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

import storage from '../../utils/storage';

import styles from './styles';
import geral from '../../styles/geral';
import cores from '../../styles/cores';

const CustomDrawer = ({navigation}) => {
  const [token, setToken] = useState('');

  const isLogado = async () => {
    let teste = await storage.getToken();
    setToken(teste);
  };

  isLogado();

  return (
    <View style={(geral.container, styles.container)}>
      {token != null ? null : (
        <Button
          mode={'text'}
          labelStyle={styles.labelBotao}
          color={cores.green400}
          onPress={() => navigation.navigate('Login')}
          icon="login">
          Login
        </Button>
      )}
      {token != null ? null : (
        <Button
          mode={'text'}
          labelStyle={styles.labelBotao}
          color={cores.green400}
          onPress={() => navigation.navigate('Cadastro')}
          icon="file-document-edit">
          Cadastro
        </Button>
      )}

      {token != null ? (
        <View style={styles.containerBotao}>
          <Button
            mode={'text'}
            labelStyle={styles.labelBotao}
            color={cores.green400}
            onPress={() => navigation.navigate('Geladeira')}
            icon="fridge">
            Geladeira
          </Button>
        </View>
      ) : null}

      <View style={styles.containerBotao}>
        <Button
          mode={'text'}
          labelStyle={styles.labelBotao}
          color={cores.green400}
          onPress={() => navigation.navigate('Home')}
          icon="home-variant">
          Home
        </Button>
      </View>

      <Button
        mode={'text'}
        labelStyle={styles.labelBotao}
        color={cores.green400}
        // onPress={() => navigation.navigate('Home')}
        icon="fridge-bottom">
        Artesanais
      </Button>

      <Button
        labelStyle={styles.labelBotao}
        mode={'text'}
        color={cores.green400}
        icon="glass-mug-variant"
        // onPress={() => navigation.navigate('Home')}
      >
        Nacionais
      </Button>
      <Button
        labelStyle={styles.labelBotao}
        mode={'text'}
        color={cores.green400}
        // onPress={() => navigation.navigate('Home')}
        icon="airplane">
        Importadas
      </Button>

      {token != null ? (
        <Button
          labelStyle={styles.labelBotao}
          mode={'text'}
          color={cores.green400}
          onPress={() => {
            storage.deleteToken();
            navigation.navigate('Home');
          }}
          icon="door-open">
          Logout
        </Button>
      ) : null}
    </View>
  );
};

export default CustomDrawer;
