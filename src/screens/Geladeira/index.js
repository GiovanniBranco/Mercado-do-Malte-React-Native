import React, { useState, useEffect } from 'react';

import {
  Text,
  FlatList,
  View,

  TouchableOpacity,
} from 'react-native';
import CardGeladeira from '../../components/CardGeladeira';
import Header from '../../components/Header';

import styles from './styles';


function Geladeira() {
  const [produtoss, setProdutos] = useState([]);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    setProdutos()
  }, []);
 
  const produtos = [
    {
      id: 1,
      nome: 'heineken',
      preco: 9.9,
      quantidade: 2,
      categoria: 'Nacional',
      descricao:
        'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
    }
  ];
  const somarQuantidade = () =>{
    let somar = 0;
    produtos.map(produto =>{
      somar += produto.preco * produto.quantidade
    })
    setValor(somar)
  }
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.texto}>Minha Geladeira</Text>
        </View>

        <FlatList
          style={styles.lista}
          data={produtos}
          renderItem={({item}) => <CardGeladeira {...item} funcao={()=>somarQuantidade()}></CardGeladeira>}
          keyExtractor={({id}) => String(id)}
        />
        <View style={styles.viewFooter}>
          <View style={styles.viewFooterEsquerdo}>
            <Text style={styles.textoSuperiorFooter}>
              Total pedido R${valor}
            </Text>
            <Text style={styles.textoInferiorFooter}>
              Entrega em 7 dias úteis
            </Text>
          </View>
          <View style={styles.viewFooterDireito}>
            <TouchableOpacity style={styles.btnInferiorFooter} onPress={()=>{alert()}}>
              <Text style={styles.textoInferiorFooter}>Pagar Pedidos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default Geladeira;
