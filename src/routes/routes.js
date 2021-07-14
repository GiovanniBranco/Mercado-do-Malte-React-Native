import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Drawer from '../navigators/drawer';

import Home from '../screens/Home';
import Detalhes from '../screens/Detalhes';
import Login from '../screens/Login/';
import Cadastro from '../screens/Cadastro/';
import Geladeira from '../screens/Geladeira';
import Pagamento from '../screens/Pagamento';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home" headerMode>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhes" component={Detalhes} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator> */}
      <Drawer />
    </NavigationContainer>
  );
};

export default Routes;
