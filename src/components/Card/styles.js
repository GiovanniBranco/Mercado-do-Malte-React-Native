import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: "center",
    height: "40%",
    width: "90%",
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 5,

    elevation: 3,
  },
  containerImage:{flex: 1, backgroundColor:"blue"},
  containerInfos:{flex: 1, backgroundColor:"red"},
  img:{
    width: 100,
    height: 100,
  }
});

export default styles;