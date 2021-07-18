import {StyleSheet} from 'react-native';

import cores from '../../styles/cores';
import fontes from '../../styles/fontes';
import metricas from '../../styles/metricas';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: metricas.navBarHeight,
    backgroundColor: cores.dark,
    alignItems: 'center',
  },
  busca: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '3%',
    marginBottom: '3%',
  },
  login: {
    color: cores.green400,
    fontSize: fontes.regular,
    fontFamily: 'Lexend-Bold',
    marginRight: metricas.doubleBaseMargin,
  },
  geladeira: {
    color: cores.green400,
    marginRight: metricas.doubleBaseMargin,
  },
});

export default styles;
