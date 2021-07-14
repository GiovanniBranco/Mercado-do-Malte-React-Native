import {StyleSheet} from 'react-native';
import cores from '../../styles/cores';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    height: '70%',
    width: '90%',
    padding: 5,
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 3,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 5,

    elevation: 3,
  },
  containerImage: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  containerInfos: {
    height: '70%',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  viewQuantidade: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputQuantidade: {
    borderColor: cores.gray800,
    borderRadius: 3,
    borderWidth: 1,
    height: 40,
    textAlign: 'center',
  },
  icon: {
    color: cores.green400,
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  viewBotao: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: '5%',
  },
  botao: {
    backgroundColor: cores.green400,
    padding: 5,
    borderRadius: 3,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
  },
});

export default styles;
