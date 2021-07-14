import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 300,
    width: '90%',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRightWidth: 1,
    borderRightColor: '#AFB2B1',
  },
  img: {
    width: "100%",
    height: "75%",
  },
  containerInfos: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },
});

export default styles;
