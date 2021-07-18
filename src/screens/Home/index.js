import React, {useEffect, useState} from 'react';
import {FlatList, BackHandler, Alert, ActivityIndicator} from 'react-native';
import {Searchbar} from 'react-native-paper';

import Header from '../../components/Header';
import Card from '../../components/Card';

import produtoRepository from '../../repository/produtoRepository';

import cores from '../../styles/cores';
import styles from '../../components/Header/style';

function Home({navigation}) {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);

    if (searchQuery.length > 2) {
      setProdutosFiltrados(
        produtos.filter(p => p.nome.includes(searchQuery.toLocaleLowerCase())),
      );
    } else {
      setProdutosFiltrados(produtos);
    }
  };

  const carregaProduto = async () => {
    setLoading(true);
    const data = await produtoRepository.getProdutos();
    setProdutos(data);
    setProdutosFiltrados(data);
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
    produtoRepository.getProdutos();
    return () => backHandler.remove();
  }, []);

  const load = () => {
    return <ActivityIndicator size="large" color={cores.green400} />;
  };

  return (
    <>
      <Header navigation={navigation} />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.busca}
      />
      <FlatList
        data={produtosFiltrados}
        keyExtractor={item => item.nome}
        ListFooterComponent={loading ? load : null}
        renderItem={({item}) => (
          <Card navigation={navigation} produto={item} />
        )}></FlatList>
    </>
  );
}

export default Home;
