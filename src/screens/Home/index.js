import React, {useEffect} from 'react';
import {useState} from 'react';
import {FlatList, View} from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/Card';

import getProdutos from '../../repository/produtoRepository';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

function Home({navigation}) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoadiong] = useState(false);

  const carregaProduto = async () => {
    setLoadiong(true);
    const data = await getProdutos();
    setProdutos(data);
    setLoadiong(false);
  };

  useEffect(() => {
    carregaProduto();
    getProdutos();
  }, []);

  return (
    <>
    <Header navigation={navigation}/>
    <FlatList
      data={produtos}
      keyExtractor={item => item.nome}
      renderItem={({item}) => (
        <Card nome={item.nome} preco={item.preco} categoria={item.categoria} />
      )}></FlatList>
    </>  
  );
}

export default Home;
