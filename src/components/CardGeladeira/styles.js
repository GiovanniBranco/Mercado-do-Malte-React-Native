import {StyleSheet} from 'react-native';
import cores from '../../styles/cores';

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    height: 100,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  imagem: {
    width: '32%',
    borderColor: 'lightgray',
    height: '100%',
    borderRightWidth: 1,
  },
  img: {
    height: '100%',
  },
  quantidadeNome: {
    alignItems: 'center',
    width: '32%',
    paddingTop: '1%',
  },
  viewQuantidade: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '7%',
  },
  inputQuantidade: {
    borderColor: cores.gray800,
    borderRadius: 3,
    borderWidth: 1,
    height: 40,
    textAlign: 'center',
    color: 'black',
  },
  icon: {
    color: cores.green400,
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  viewValor: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '32%',
  },
  textoNomePreco: {
    fontSize: 15,
    fontFamily: 'Lexend-Regular',
  },
});

export default styles;
