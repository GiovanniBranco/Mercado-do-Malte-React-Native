import {StyleSheet} from 'react-native';

import cores from '../../styles/cores';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: cores.dark,
    height: '100%',
  },
  labelBotao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerBotao: {
    flexDirection: 'row',
  },
  icone: {
    marginRight: 0,
    paddingRight: 0,
  },
});

export default styles;
