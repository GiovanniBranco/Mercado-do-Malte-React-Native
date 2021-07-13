import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  containerIcone: {
    width: '100%',
    margin: 0,
    padding: 0,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  icone: {
    margin: 0,
    padding: 0,
  },
  containerCadastro: {
    marginTop: 0,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cadastro: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
  },
  containerInputs: {
    marginTop: '3%',
  },
  labelData: {
    margin: 0,
    fontSize: 14,
    marginLeft: 18,
  },
  containerInputDuplo: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    justifyContent: 'center',
    width: '100%',
  },
  textInputDuplo: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
  },
  textInputDuploMaior: {
    height: 40,
    justifyContent: 'center',
    width: '55%',
  },
  textInputCPF: {
    height: 40,
    justifyContent: 'center',
    width: '50%',
  },
  date: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 0,
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
  },
  textDate: {
    alignSelf: 'center',
    fontSize: 16,
  },
  containerTriplo: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textInputTriploMenor: {
    height: 40,
    justifyContent: 'center',
    width: '18%',
  },
  textInputTriploMeio: {
    height: 40,
    justifyContent: 'center',
    width: '28%',
  },
  textInputTriploMaior: {
    height: 40,
    justifyContent: 'center',
    width: '50%',
  },
  containerBotoes: {
    marginTop: '5%',
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  botaoCadastrar: {
    marginBottom: '5%',
    padding: 3,
  },
  labelCadastrar: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 3,
  },
});

export default styles;
