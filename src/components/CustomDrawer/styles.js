import {StyleSheet} from 'react-native';

import cores from '../../styles/cores';
import fontes from '../../styles/fontes';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: cores.dark,
    height: '100%',
  },
  labelBotao: {
    fontSize: 18,
    fontFamily: 'Lexend-Regular',
    letterSpacing: 2,
    fontWeight: '700',
  },
  containerBotao: {
    flexDirection: 'row',
  },
  icone: {
    marginRight: 0,
    paddingRight: 0,
  },
  username: {
    fontSize: fontes.large,
    fontWeight: '700',
    color: cores.green400,
    marginLeft: 40,
  },
  email: {
    fontSize: fontes.large,
    fontWeight: '500',
    color: cores.green400,
    marginLeft: 40,
  },
  divisor: {
    height: 1,
    width: '90%',
    backgroundColor: cores.green400,
    marginLeft: '2%',
    marginTop: '4%',
  },
});

export default styles;
