import {StyleSheet} from 'react-native';

import cores from '../../styles/cores';
import fontes from '../../styles/fontes';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: '3%',
  },
  containerIcone: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '8%',
  },
  containerCadastro: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInputs: {
    marginTop: '2%',
  },
  labelData: {
    margin: 0,
    fontSize: 14,
    marginLeft: 18,
    color: '#333',
  },
  containerInputDuplo: {
    marginTop: '2%',
    marginBottom: '2%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 35,
    justifyContent: 'center',
    width: '100%',
    fontFamily: 'Inter-Regular',
    borderColor: cores.gray200,
  },
  textInputDuplo: {
    width: '40%',
    height: 35,
    justifyContent: 'center',
    fontFamily: 'Inter-Regular',
    borderColor: cores.gray200,
  },
  textInputDuploMaior: {
    height: 35,
    justifyContent: 'center',
    width: '55%',
    fontFamily: 'Inter-Regular',
    borderColor: cores.gray200,
  },
  textInputCPF: {
    height: 35,
    justifyContent: 'center',
    width: '50%',
    fontFamily: 'Inter-Regular',
    borderColor: cores.gray200,
  },
  date: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 25,
    width: '84%',
    borderWidth: 1,
    borderColor: cores.gray200,
    borderRadius: 3,
  },
  textDate: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  containerTriplo: {
    marginTop: '2%',
    marginBottom: '2%',
    fontFamily: 'Inter-Regular',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textInputTriploMenor: {
    height: 35,
    justifyContent: 'center',
    width: '18%',
  },
  textInputTriploMeio: {
    height: 35,
    justifyContent: 'center',
    width: '28%',
  },
  textInputTriploMaior: {
    height: 35,
    justifyContent: 'center',
    width: '50%',
  },
  containerBotoes: {
    marginTop: '10%',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  botaoCadastrar: {
    marginBottom: '3%',
    padding: 5,
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
  containerLoading: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textLoading: {
    color: cores.green400,
    fontSize: fontes.large,
  },
});

export default styles;
