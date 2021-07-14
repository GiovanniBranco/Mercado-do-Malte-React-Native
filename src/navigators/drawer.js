import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();
const RouteDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
    </Drawer.Navigator>
  );
};

export default RouteDrawer;
