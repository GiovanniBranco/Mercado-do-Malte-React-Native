import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Login from './screens/Login';

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Text>Estou funcionando</Text>
    // </View>
    <Login />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
