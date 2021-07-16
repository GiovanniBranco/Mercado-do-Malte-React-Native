import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import HomeImportadas from '../screens/HomeImportadas';
import HomeNacionais from '../screens/HomeNacionais';
import HomeArtesanais from '../screens/HomeArtesanais';
import Detalhes from '../screens/Detalhes';
import Login from '../screens/Login/';
import Cadastro from '../screens/Cadastro/';
import Geladeira from '../screens/Geladeira';
import Pagamento from '../screens/Pagamento';
import Redefinir from '../screens/Redefinir';

const Stack = createStackNavigator();

const StackRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeImportadas" component={HomeImportadas} />
      <Stack.Screen name="HomeNacionais" component={HomeNacionais} />
      <Stack.Screen name="HomeArtesanais" component={HomeArtesanais} />
      <Stack.Screen name="Geladeira" component={Geladeira} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Pagamento" component={Pagamento} />
      <Stack.Screen name="Redefinir" component={Redefinir} />
    </Stack.Navigator>
  );
};

export default StackRoute;
