import React, {useState, useEffect, useContext} from 'react';

import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

import TokenContext from '../../context/TokenContext';

import formata from '../../utils/formata';

import produtoRepository from '../../repository/produtoRepository';

import storage from '../../utils/storage';

import styles from './styles';
import geral from '../../styles/geral';
import cores from '../../styles/cores';

const CustomDrawer = ({navigation}) => {
  const [username, setUserName] = useState('');

  const [produtos, setProdutos] = useState([]);
  const [tokenContext, setTokenContext] = useContext(TokenContext);

  const setUsuario = async () => {
    const username = await storage.getCliente();
    setUserName(username);
  };

  setUsuario();

  useEffect(async () => {
    setProdutos(await produtoRepository.getProdutos());
  }, []);

  return (
    <View style={(geral.container, styles.container)}>
      {tokenContext != null ? null : (
        <Button
          mode={'text'}
          labelStyle={styles.labelBotao}
          color={cores.green400}
          onPress={() => navigation.navigate('Login')}
          icon="login">
          Login
        </Button>
      )}
      {tokenContext != null ? null : (
        <Button
          mode={'text'}
          labelStyle={styles.labelBotao}
          color={cores.green400}
          onPress={() => navigation.navigate('Cadastro')}
          icon="file-document-edit">
          Cadastro
        </Button>
      )}

      {tokenContext === null ? null : (
        <>
          <View style={styles.containerUser}>
            <Text style={styles.username}>
              {formata.formataPalavra(username)}
            </Text>
            <Text style={styles.email}>{username}@gmail.com</Text>
          </View>
          <View style={styles.divisor} />
        </>
      )}

      {tokenContext != null ? (
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
        onPress={() => navigation.navigate('HomeArtesanais')}
        icon="fridge-bottom">
        Artesanais
      </Button>

      <Button
        labelStyle={styles.labelBotao}
        mode={'text'}
        color={cores.green400}
        icon="glass-mug-variant"
        onPress={() => navigation.navigate('HomeNacionais')}>
        Nacionais
      </Button>
      <Button
        labelStyle={styles.labelBotao}
        mode={'text'}
        color={cores.green400}
        onPress={() => navigation.navigate('HomeImportadas')}
        icon="airplane">
        Importadas
      </Button>

      {tokenContext != null ? (
        <Button
          labelStyle={styles.labelBotao}
          mode={'text'}
          color={cores.green400}
          onPress={() => {
            setTokenContext(null);
            storage.deleteToken();
            setUserName('');
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
