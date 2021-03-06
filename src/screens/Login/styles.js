import {StyleSheet} from 'react-native';

import cores from '../../styles/cores';
import fontes from '../../styles/fontes';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  containerIcone: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icone: {
    margin: 0,
    padding: 0,
  },
  containerLogin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    fontSize: 32,
    fontWeight: 'bold',
    color: cores.green400,
  },
  containerLink: {
    alignSelf: 'flex-end',
  },
  link: {
    fontSize: 12,
    color: cores.greenlight,
  },
  containerBotoes: {
    alignSelf: 'center',
    width: '80%',
    justifyContent: 'space-between',
  },
  botaoEntrar: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: '3%',
  },
  containerText: {
    marginTop: '10%',
    width: '100%',
    alignSelf: 'center',
  },
  textoInicial: {
    marginBottom: '2%',
    alignSelf: 'center',
    fontSize: 15,
  },
  texto: {
    marginBottom: '2%',
    alignSelf: 'center',
    fontSize: 14,
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
