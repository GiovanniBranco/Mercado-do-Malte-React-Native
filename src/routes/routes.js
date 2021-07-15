import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Drawer from '../navigators/drawer';

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default Routes;
