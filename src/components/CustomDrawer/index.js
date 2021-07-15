import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

import obterUser from '../../repository/clienteRepository';

import storage from '../../utils/storage';
import formata from '../../utils/formata';

import getProdutos from '../../repository/produtoRepository';

import styles from './styles';
import geral from '../../styles/geral';
import cores from '../../styles/cores';

const CustomDrawer = ({navigation}) => {
  const [token, setToken] = useState('');
  const [username, setUserName] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [filtroProdutos, setFiltroProdutos] = useState([]);

  const isLogado = async () => {
    let token = await storage.getToken();
    setToken(token);
    // await getUser();
  };

  // const getUser = async () => {
  //   const username = await storage.getCliente();
  //   const user = await obterUser(username);
  //   if (user != null) {
  //     setUserName(user);
  //   } else {
  //     setUserName(null);
  //   }
  // };
  isLogado();

  useEffect(async () => {
    let pVindodaAPI = await getProdutos();
    setProdutos(pVindodaAPI);
  }, []);

  const categoriaFiltrar = categoria => {
    const filtro = produtos.filter(p => p.categoria === categoria);

    navigation.navigate('Home', filtro);
  };

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

      {token === null ? null : (
        <>
          <View style={styles.containerUser}>
            <Text style={styles.username}>
              {formata.formataPalavra(username.username)}
            </Text>
            <Text style={styles.email}>{username.email}</Text>
          </View>
          <View style={styles.divisor} />
        </>
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
        onPress={() => categoriaFiltrar('artesanais')}
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
