import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TokenContext from '../context/TokenContext';
import Drawer from '../navigators/drawer';

const Routes = () => {
  const tokenValue = useState('');

  return (
    <NavigationContainer>
      <TokenContext.Provider value={tokenValue}>
        <Drawer />
      </TokenContext.Provider>
    </NavigationContainer>
  );
};

export default Routes;
