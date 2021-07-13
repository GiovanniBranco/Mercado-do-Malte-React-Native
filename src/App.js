import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro/';
import Routes from './routes/routes';

import geral from './styles/geral';

const App = () => {
  return (
    <View style={geral.container}>
      <Routes />
    </View>
  );
};

export default App;
