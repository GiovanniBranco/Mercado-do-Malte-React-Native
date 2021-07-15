import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TokenContext from '../context/TokenContext';
import Drawer from '../navigators/drawer';

const Routes = () => {
  const token = useState('');

  return (
    <NavigationContainer>
      <TokenContext.Provider value={token}>
        <Drawer />
      </TokenContext.Provider>
    </NavigationContainer>
  );
};

export default Routes;
