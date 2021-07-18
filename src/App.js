import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';

import Routes from './routes/routes';
import AnimatedSplash from './lib/AnimatedSplash';

import geral from './styles/geral';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <AnimatedSplash
        logoWidht={300}
        logoHeight={300}
        isLoaded={isLoaded}
        backgroundColor={'#262626'}
        logoImage={require('./lib/assets/MERCADO-DO-MALTE_LOGO.png')}>
        <View style={geral.container}>
          <Routes />
        </View>
      </AnimatedSplash>
    </>
  );
};

export default App;
