import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackRouter from '../navigators/stack';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const RouteDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="StackRouter"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="StackRouter" component={StackRouter} />
    </Drawer.Navigator>
  );
};

export default RouteDrawer;
