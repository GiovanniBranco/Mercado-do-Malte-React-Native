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
    fontSize: 18,
    fontFamily: "Lexend-Regular",
    letterSpacing: 2,
    fontWeight: '700',
  },
  containerBotao: {
    flexDirection: 'row',
  }
});

export default styles;
