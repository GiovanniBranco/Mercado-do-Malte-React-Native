import React, {useState, useEffect} from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';

import CardGeladeira from '../../components/CardGeladeira';
import Header from '../../components/Header';

import formata from '../../utils/formata';
import realmRepository from '../../repository/realmRepository';

import styles from './styles';

function Geladeira({navigation}) {
  const [produtos, setProdutos] = useState([]);
  const [valor, setValor] = useState(0);

  useEffect(async () => {
    const produtosRealm = await realmRepository.getProdutoRealm();
    setProdutos(produtosRealm);
    somarQuantidade();
  }, []);

  const somarQuantidade = async () => {
    let somar = 0;
    const produtosRealm = await realmRepository.getProdutoRealm();
    produtosRealm.map(produto => {
      somar += produto.preco * produto.quantidade;
    });
    setValor(somar);
  };

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.texto}>Minha Geladeira</Text>
        </View>

        <FlatList
          style={styles.lista}
          data={produtos}
          keyExtractor={item => item.nome}
          renderItem={({item}) => (
            <CardGeladeira
              produto={item}
              funcao={() => somarQuantidade()}></CardGeladeira>
          )}
        />
        <View style={styles.viewFooter}>
          <View style={styles.viewFooterEsquerdo}>
            <Text style={styles.textoSuperiorFooter}>
              Total pedido {formata.formataReal(valor)}
            </Text>
            <Text style={styles.textoInferiorFooter}>
              Entrega em 7 dias úteis
            </Text>
          </View>
          <View style={styles.viewFooterDireito}>
            <TouchableOpacity
              style={styles.btnInferiorFooter}
              onPress={() => {
                navigation.navigate('Pagamento');
              }}>
              <Text style={styles.textoInferiorFooter}>Pagar Pedidos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default Geladeira;
