import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro/';
import Routes from './routes/routes';
import AnimatedSplash from "./lib/AnimatedSplash"; //**/

import geral from './styles/geral';

const App = () => {

  //
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  //
  return (
   
    <>
      <AnimatedSplash
        logoWidht={300}
        logoHeight={300}
        isLoaded={isLoaded}
        backgroundColor={"#262626"}
        logoImage={require("./lib/assets/MERCADO-DO-MALTE_LOGO.png")}
      >
       <View style={geral.container}>
          <Routes  />
        </View>
      </AnimatedSplash>
    </>
  );
};

export default App;