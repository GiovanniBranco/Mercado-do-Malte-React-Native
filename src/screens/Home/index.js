import React, {useEffect} from 'react';
import {useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/Card';

import getProdutos from '../../repository/produtoRepository';
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

  useEffect(() => {
    carregaProduto();
    getProdutos();
  }, []);

  const load = () =>{
    return <ActivityIndicator size="large" color={cores.green400}/>
  };

  return (
    <>
      <Header navigation={navigation} />
      <FlatList
        data={produtos}
        keyExtractor={item => item.nome}
        ListFooterComponent={loading ? load : null}
        renderItem={({item}) => (
          <Card
            navigation={navigation}
            produto={item}
          />
        )}></FlatList>
    </>
  );
}

export default Home;
