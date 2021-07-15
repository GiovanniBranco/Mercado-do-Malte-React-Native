import {StyleSheet} from 'react-native';

import cores from '../../styles/cores';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 300,
    width: '90%',
    marginTop: '3%',
    marginBottom: '3%',
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
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    borderRightWidth: 1,
    borderRightColor: '#AFB2B1',
  },
  img: {
    width: '100%',
    minHeight: '50%'
  },
  containerInfos: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '5%',
  },
  btnDetalhes: {
    backgroundColor: cores.green500,
    padding: '5%',
    borderRadius: 3,
    width: '85%',
    alignItems: 'center',
  },
});

export default styles;
