import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';

import SelectDropdown from 'react-native-select-dropdown';

import Header from '../../components/Header';
import geral from '../../styles/geral';
import cores from '../../styles/cores';
import styles from './styles';

const Pagamento = ({navigation}) => {
  const meses = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const anos = [
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
  ];
  const parcelas = ['1x de R$ 15', '2x de R$ 7,50'];

  return (
    <>
      <Header navigation={navigation} />

      <View style={styles.container}>
        <View style={styles.containerTitulo}>
          <Text style={geral.tituloVerde}>Formas de Pagamento</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.containerMenu}>
          <Text style={styles.boleto}>Boleto</Text>

          <View style={styles.divisorMenu} />

          <Text style={styles.cartao}>Cartao de credito</Text>

          <View style={styles.divisorMenu} />

          <Text style={styles.pix}>Pix</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.containerInput}>
          <View style={styles.cartaoValidade}>
            <TextInput
              mode="outlined"
              label="Numero do cartao*"
              style={styles.inputCartao}
            />
            <View style={styles.containerValidade}>
              <View>
                <Text>Validade*</Text>
                <View style={styles.containerValidade}>
                  <SelectDropdown
                    data={meses}
                    defaultValue="01"
                    onSelect={(selectedItem, index) => {}}
                    buttonStyle={styles.inputMes}
                    buttonTextStyle={styles.labelValidade}
                  />
                  <SelectDropdown
                    data={anos}
                    defaultValue="21"
                    onSelect={(selectedItem, index) => {}}
                    buttonStyle={styles.inputAno}
                    buttonTextStyle={styles.labelValidade}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerCvv}>
            <TextInput mode="outlined" label="CVV*" style={styles.inputCvv} />
            <IconButton
              icon="credit-card-check"
              color={cores.green400}
              size={40}
              style={styles.iconeCvv}
            />
          </View>
          <View style={styles.containerParcelas}>
            <View>
              <Text>Número de parcelas*</Text>
            </View>
            <SelectDropdown
              data={parcelas}
              defaultValueByIndex={0}
              onSelect={(selectedItem, index) => {}}
              buttonStyle={styles.inputParcelas}
              buttonTextStyle={styles.labelValidade}
            />
          </View>

          <View style={styles.divisor} />
          <View style={styles.containerTotal}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.valor}>R$ 15,00</Text>
          </View>
          <View style={styles.containerBotoes}>
            <Button
              style={styles.fechar}
              labelStyle={geral.btnText}
              mode="contained"
              color={cores.green500}
              onPress={() =>
                Alert.alert('Nosso agradecimento!', 'Grupo 01, só BRABO!')
              }>
              Fechar Pedido
            </Button>
            <Button
              style={styles.voltar}
              labelStyle={styles.label}
              mode="outlined"
              color={cores.green500}
              onPress={() => navigation.goBack()}>
              Voltar
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default Pagamento;
