import React, {useEffect} from 'react';
import {useState} from 'react';
import {FlatList, BackHandler, Alert} from 'react-native';

import Card from '../../components/Card';

import getProdutos from '../../repository/produtoRepository';
import storage from '../../utils/storage';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoadiong] = useState(false);

  const carregaProduto = async () => {
    setLoadiong(true);
    const data = await getProdutos();
    setProdutos(data);
    setLoadiong(false);
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

  return (
    <FlatList
      data={produtos}
      keyExtractor={item => item.nome}
      renderItem={({item}) => (
        <Card nome={item.nome} preco={item.preco} categoria={item.categoria} />
      )}></FlatList>
  );
}

export default Home;
