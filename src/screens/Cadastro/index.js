import React, {useState} from 'react';
import {View, Text, ScrollView, Alert, ActivityIndicator} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';

import {DatePicker} from 'react-native-woodpicker';
import {format} from 'date-fns';

import Cliente from '../../models/cliente';
import Endereco from '../../models/endereco';
import EnderecoShow from '../../models/enderecoShow';

import api from '../../services/api';
import apiViaCep from '../../services/viacep-api';

import styles from './styles';
import cores from '../../styles/cores';
import geral from '../../styles/geral';

const Cadastro = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState(new Date('01/12/2021'));
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');

  const [loading, setLoading] = useState(false);

  async function ObterEndereco(cep) {
    cep = cep.replace(/[^0-9]/, '');

    let cepInt = parseInt(cep);

    try {
      const resposta = await apiViaCep.get(`/${cepInt}/json`);
      let enderecoShow = new EnderecoShow(resposta.data);

      setBairro(enderecoShow.bairro);
      setCidade(enderecoShow.cidade);
      setLogradouro(enderecoShow.logradouro);
    } catch (error) {
      console.log(error);
      alert('Ops, não foi possivel obter o endereço, favor verifique o CEP');
    }
  }

  const handleText = () =>
    dataNascimento ? format(dataNascimento, 'dd/MM/yyyy') : 'No value Selected';

  const handleSubmit = async () => {
    setLoading(true);
    const enderecos = new Endereco({
      cep: cep,
      numero: numero,
      complemento: complemento,
    });
    const cliente = new Cliente(
      {
        email: email,
        username: userName,
        senha: senha,
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        dataNascimento: dataNascimento,
        enderecos: [
          {
            cep: cep,
            numero: numero,
            complemento: complemento,
          },
        ],
      },
      enderecos,
    );

    return await new Promise((resolve, reject) => {
      return api
        .post('/cliente', cliente)
        .then(response => {
          console.log(response);
          setLoading(false);
          Alert.alert('Sucesso', 'Cliente cadastrado com sucesso');
          navigation.navigate('Login');
        })

        .catch(error => {
          console.log(error);
          setLoading(false);
          Alert.alert('Erro', 'Não foi possível realizar o cadastro :(');
        });
    });
  };

  return (
    <ScrollView>
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
        <View style={styles.containerCadastro}>
          <Text style={geral.tituloVerdeXL}>Cadastro</Text>
        </View>

        <View style={styles.containerInputs}>
          <TextInput
            mode="outlined"
            label="Email*"
            value={email}
            onChangeText={email => setEmail(email)}
            style={styles.textInput}
            autoCompleteType="email"
            keyboardType="email-address"
          />

          <View style={styles.containerInputDuplo}>
            <TextInput
              mode="outlined"
              label="Username*"
              value={userName}
              onChangeText={user => setUserName(user)}
              style={styles.textInputDuploMaior}
            />
            <TextInput
              mode="outlined"
              label="Senha*"
              value={senha}
              onChangeText={senha => setSenha(senha)}
              style={styles.textInputDuplo}
              secureTextEntry
            />
          </View>

          <TextInput
            mode="outlined"
            label="Nome completo*"
            value={nome}
            onChangeText={nome => setNome(nome)}
            style={styles.textInput}
          />

          <View style={styles.containerInputDuplo}>
            <TextInput
              mode="outlined"
              label="CPF*"
              value={cpf}
              onChangeText={cpf => setCpf(cpf)}
              style={styles.textInputCPF}
              keyboardType="numeric"
            />
            <View style={styles.containerData}>
              <Text style={styles.labelData}>Data de nascimento*</Text>
              <DatePicker
                value={dataNascimento}
                onDateChange={async date => {
                  console.log(date);
                  await setDataNascimento(date);
                }}
                text={handleText()}
                isNullable={false}
                androidDisplay="calendar"
                style={styles.date}
                textInputStyle={styles.textDate}
              />
            </View>
          </View>

          <View style={styles.containerInputDuplo}>
            <TextInput
              mode="outlined"
              label="Telefone*"
              value={telefone}
              onChangeText={tel => setTelefone(tel)}
              style={styles.textInputDuploMaior}
              keyboardType="numeric"
            />
            <TextInput
              mode="outlined"
              label="CEP*"
              value={cep}
              onChangeText={cep => setCep(cep)}
              onBlur={() => ObterEndereco(cep)}
              style={styles.textInputDuplo}
              keyboardType="numeric"
            />
          </View>

          <TextInput
            mode="outlined"
            label="Logradouro"
            value={logradouro}
            style={styles.textInput}
          />

          <View style={styles.containerTriplo}>
            <TextInput
              mode="outlined"
              label="Nº*"
              value={numero}
              onChangeText={num => setNumero(num)}
              style={styles.textInputTriploMenor}
            />
            <TextInput
              mode="outlined"
              label="Bairro"
              value={bairro}
              style={styles.textInputTriploMeio}
            />
            <TextInput
              mode="outlined"
              label="Cidade"
              value={cidade}
              style={styles.textInputTriploMaior}
            />
          </View>

          <TextInput
            mode="outlined"
            label="Complemento"
            value={complemento}
            onChangeText={complemento => setComplemento(complemento)}
            style={styles.textInput}
          />

          <View style={styles.containerBotoes}>
            <Button
              mode="contained"
              color={cores.green400}
              style={styles.botaoCadastrar}
              labelStyle={styles.labelCadastrar}
              onPress={() => {
                handleSubmit();
              }}>
              Cadastrar
            </Button>

            {loading ? (
              <View style={styles.containerLoading}>
                <ActivityIndicator
                  size="large"
                  color={cores.green400}
                  animating={loading}
                />
                <Text style={styles.textLoading}>Enviando...</Text>
              </View>
            ) : null}

            <Button
              mode="outlined"
              color={cores.green400}
              style={styles.botaoVoltar}
              labelStyle={styles.labelCadastrar}
              onPress={() => navigation.navigate('Home')}>
              Voltar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cadastro;
