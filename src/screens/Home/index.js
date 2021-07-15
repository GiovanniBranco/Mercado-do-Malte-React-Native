import React, {useEffect, useState} from 'react';
import {FlatList, BackHandler, Alert, ActivityIndicator} from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/Card';

import getProdutos from '../../repository/produtoRepository';

import storage from '../../utils/storage';

import cores from '../../styles/cores';

function Home({navigation}) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregaProduto = async () => {
    setLoading(true);
    const data = await getProdutos();
    setProdutos(data);
    setLoading(false);
  };

  const fecharApp = () => {
    Alert.alert('', 'Tem certeza que deseja sair?', [
      {
        text: 'Cancelar',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          storage.deleteToken();
          BackHandler.exitApp();
        },
      },
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    fecharApp,
  );

  

  useEffect(() => {
    carregaProduto();
    getProdutos();
    return () => backHandler.remove();
  }, []);

  const load = () => {
    return <ActivityIndicator size="large" color={cores.green400} />;
  };

  return (
    <>
      <Header navigation={navigation} />
      <FlatList
        data={produtos}
        keyExtractor={item => item.nome}
        ListFooterComponent={loading ? load : null}
        renderItem={({item}) => (
          <Card navigation={navigation} produto={item} />
        )}></FlatList>
    </>
  );
}

export default Home;
