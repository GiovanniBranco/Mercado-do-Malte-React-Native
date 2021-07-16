import React, {useState, useContext} from 'react';
import {View, Text, ActivityIndicator, Alert} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';

import storage from '../../utils/storage';

import apiUsuario from '../../services/api-usuario';
import TokenContext from '../../context/TokenContext';

import styles from './styles';
import cores from '../../styles/cores';
import geral from '../../styles/geral';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [tokenContext, setTokenContext] = useContext(TokenContext);

  const [loading, setLoading] = useState(false);

  const efetuarLogin = async () => {
    if (!username || !senha) {
      alert('Favor informar seu usuário e senha');
      return;
    }
    
    setLoading(true);
    await apiUsuario
      .logar(username, senha)
      .then(resposta => {
        const token = resposta.data.Authorization;
        salvarUsuario();
        setTokenContext(token);
        setLoading(false);
        navigation.navigate('Home');
      })
      .catch(erro => {
        setLoading(false);
        Alert.alert('Erro', 'Não foi possível efetual o login');
        console.log(erro);
      });
  };

  const salvarUsuario = () => {
    storage.salvarCliente(username);
  };

  return (
    <>
      <View style={styles.containerIcone}>
        <IconButton
          icon="menu"
          color={cores.green400}
          size={40}
          style={styles.icone}
          onPress={() => navigation.openDrawer()}
        />
        <IconButton
          icon="arrow-left-bold"
          color={cores.green400}
          size={40}
          style={styles.icone}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.containerLogin}>
          <Text style={styles.login}>Login</Text>
        </View>

        <View style={styles.containerTextInput}>
          <TextInput
            mode="outlined"
            label="Username"
            value={username}
            onChangeText={user => setUsername(user)}
          />
          <TextInput
            mode="outlined"
            secureTextEntry
            label="Senha"
            value={senha}
            onChangeText={senha => setSenha(senha)}
          />
        </View>

        <View style={styles.containerLink}>
          <Button
            mode="text"
            color={cores.greenlight}
            labelStyle={styles.link}
            onPress={() => navigation.navigate('Redefinir')}>
            Esqueci minha senha
          </Button>
        </View>

        <View style={styles.containerBotoes}>
          <Button
            mode="contained"
            onPress={() => efetuarLogin()}
            color={cores.green400}
            style={styles.botaoEntrar}>
            Entrar
          </Button>

          {loading ? (
            <View style={styles.containerLoading}>
              <ActivityIndicator
                size="large"
                color={cores.green400}
                animating={loading}
              />
              <Text style={styles.textLoading}>Entrando...</Text>
            </View>
          ) : null}

          <Button
            mode="outlined"
            color={cores.green400}
            onPress={() => navigation.navigate('Cadastro')}>
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
    </>
  );
};

export default Login;
