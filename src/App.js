import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA"
  },
});

export default App;
