import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },

  containerIcone: {
    width: '100%',
    marginTop: 10 ,
    marginLeft: 10 ,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
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
    color: 'green',
  },
  containerLink: {
    alignSelf: 'flex-end',
  },
  link: {
    fontSize: 16,
    color: 'lightgreen',
  },
  containerBotoes: {
    alignSelf: 'center',
    marginTop: '5%',
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
});

export default styles;
