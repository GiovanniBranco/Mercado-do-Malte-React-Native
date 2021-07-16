import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Button, TextInput, IconButton} from 'react-native-paper';

import styles from './styles';
import geral from '../../styles/geral';
import cores from '../../styles/cores';

const Redefinir = ({navigation}) => {
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
        <View style={styles.containerTitulo}>
          <Text style={geral.tituloVerde}>Esqueceu sua senha? </Text>
          <Text style={geral.texto}>
            Informe abaixo um meio para identificá-lo
          </Text>
        </View>

        <View style={styles.containerInputs}>
          <TextInput
            mode="outlined"
            label="Email, username ou telefone*"
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.containerBotao}>
          <Button
            mode="contained"
            color={cores.green400}
            style={styles.botao}
            labelStyle={geral.btnText}
            onPress={() =>
              Alert.alert('Sucesso!', 'Email enviado com sucesso')
            }>
            Enviar
          </Button>
        </View>
      </View>
    </>
  );
};

export default Redefinir;
