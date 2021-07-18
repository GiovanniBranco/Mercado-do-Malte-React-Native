import {StyleSheet} from 'react-native';
import cores from '../../styles/cores';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTitle: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  texto: {
    marginTop: '2%',
    fontSize: 20,
    fontFamily: 'Lexend-Regular',
    fontWeight: 'bold',
    color: cores.green400,
  },
  lista: {
    height: '65%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  viewFooter: {
    flexDirection: 'row',
    height: '13%',
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    paddingTop: '2%',
  },
  viewFooterEsquerdo: {},
  viewFooterDireito: {
    alignItems: 'center',
  },
  textoSuperiorFooter: {
    color: cores.green400,
    fontFamily: 'Lexend-Regular',
    marginBottom: '2%',
  },
  textoInferiorFooter: {
    color: 'white',
    fontFamily: 'Lexend-Regular',
  },
  btnInferiorFooter: {
    backgroundColor: 'darkgreen',
    padding: '8%',
    width: '100%',
    alignItems: 'center',
    borderRadius: 3,
  },
});

export default styles;
