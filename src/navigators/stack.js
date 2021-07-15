import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Detalhes from '../screens/Detalhes';
import Login from '../screens/Login/';
import Cadastro from '../screens/Cadastro/';
import Geladeira from '../screens/Geladeira';
import Pagamento from '../screens/Pagamento';

const Stack = createStackNavigator();

const StackRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Geladeira" component={Geladeira} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};

export default StackRoute;