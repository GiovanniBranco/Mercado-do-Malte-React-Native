import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';

import geral from './styles/geral';

const App = () => {
  return (
    <View style={geral.container}>
      <Home />
    </View>
  );
};


export default App;
