import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Posts';
import Login from '../screens/Login/index';
import Cadastro from '../screens/Users';
import Geladeira from '../screens/Users';
import Pagamento from '../screens/Users';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Users" component={Users} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
