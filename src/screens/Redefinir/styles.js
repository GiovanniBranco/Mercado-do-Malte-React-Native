import {StyleSheet} from 'react-native';
import cores from '../../styles/cores';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  containerIcone: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInput: {
    height: 50,
    justifyContent: 'center',
    width: '100%',
    fontFamily: 'Inter-Regular',
    borderColor: cores.gray200,
  },
  containerBotao: {
    marginTop: '5%',
  },
  botao: {
    padding: '2%',
  },
});

export default styles;
