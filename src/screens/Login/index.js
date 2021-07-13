import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';

import storage from '../../utils/storage';

import apiUsuario from '../../services/api-usuario';

import styles from './styles';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  const efetuarLogin = async () => {
    if (!username || !senha) {
      alert('Favor informar seu usuário e senha');
      return;
    }

    await apiUsuario
      .logar(username, senha)
      .then(resposta => {
        console.log(resposta);
        const token = resposta.data.Authorization;
        console.log(token);
        storage.storeToken(token);
        salvarUsuario();
        // window.open('/', '_self');
      })
      .catch(erro => {
        alert('Não foi possível efetual o login');
        console.log(erro);
      });
  };

  const salvarUsuario = () => {
    storage.salvarCliente(username);
  };

  useEffect(() => {
    let token = storage.getToken();

    // if (token) {
    //   navigation.navigate('Home');
    // }
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerIcone}>
        <Menu name="menu" size={30} color="white"></Menu>
      </View>

      <View style={styles.containerLogin}>
        <Text style={styles.login}>Login</Text>
      </View>

      <View style={styles.containerTextInput}>
        <TextInput
          mode="outlined"
          label="Username"
          value={username}
          selectionColor="green"
          onChangeText={user => setUsername(user)}
        />
        <TextInput
          mode="outlined"
          secureTextEntry
          label="Senha"
          value={senha}
          selectionColor="green"
          onChangeText={senha => setSenha(senha)}
        />
      </View>

      <View style={styles.containerLink}>
        <Text dataDetectorType="link" style={styles.link}>
          Esqueci minha senha
        </Text>
      </View>

      <View style={styles.containerBotoes}>
        <Button
          mode="contained"
          onPress={() => efetuarLogin()}
          color="green"
          style={styles.botaoEntrar}>
          Entrar
        </Button>
        <Button
          mode="outlined"
          color="green"
          // onPress={navigation.navigate('Cadastro')}
        >
          Cadastre se
        </Button>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textoInicial}>
          Usamos seu cadastro de forma 100% segura para:
        </Text>
        <Text style={styles.texto}>Identificar seu perfil</Text>
        <Text style={styles.texto}>
          Notificar sobre o andamento do seu pedido
        </Text>
        <Text style={styles.texto}>Gerenciar seu histórico de compras</Text>
        <Text style={styles.texto}>
          Acelerar o preenchimento de suas informações
        </Text>
      </View>
    </View>
  );
};

export default Login;
