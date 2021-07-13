import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';

import {DatePicker} from 'react-native-woodpicker';
import {format} from 'date-fns';

import Cliente from '../../models/cliente';
import Endereco from '../../models/endereco';
import EnderecoShow from '../../models/enderecoShow';

import api from '../../services/api';
import apiViaCep from '../../services/viacep-api';

import styles from './styles';

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
          alert('Cliente cadastrado com sucesso');
          navigation.navigate('Login');
        })

        .catch(error => {
          console.log(error);
          alert('Não foi possível realizar o cadastro :(');
        });
    });
  };

  return (
    <>
      <View style={styles.containerIcone}>
        <IconButton icon="menu" color="green" size={40} style={styles.icone} />
      </View>
      <View style={styles.container}>
        <View style={styles.containerCadastro}>
          <Text style={styles.cadastro}>Cadastro</Text>
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
              color="green"
              style={styles.botaoCadastrar}
              labelStyle={styles.labelCadastrar}
              onPress={() => handleSubmit()}>
              Cadastrar
            </Button>

            <Button
              mode="outlined"
              color="green"
              style={styles.botaoVoltar}
              labelStyle={styles.labelCadastrar}
            //   onPress={() => navigation.navigate('Home')}
              >
              Voltar
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default Cadastro;
