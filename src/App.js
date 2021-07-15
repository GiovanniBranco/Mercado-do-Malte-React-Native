import React from 'react';
import {View} from 'react-native';

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
