import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import geral from '../../styles/geral';
import formata from '../../utils/formata';

import styles from './styles';

function Card(props) {

  const { nome, categoria, preco, descricao} = props.produto

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{
            uri: `https://ecommerce-serratec.herokuapp.com/produto/${props.produto.nome}/imagem`,
          }}
        />
      </View>
      <View style={styles.containerInfos}>
        <Text style={geral.titulo}>
          {formata.formataPalavra(props.produto.nome)}
        </Text>
        <Text style={geral.numero}>{props.produto.preco}</Text>
        <Text style={geral.subTitulo}>
          {formata.formataPalavra(props.produto.categoria)}
        </Text>
        <TouchableOpacity
          style={styles.btnDetalhes}
          onPress={() => props.navigation.push('Detalhes', {nome, categoria, preco, descricao})}>
          <Text style={geral.btnText}>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;
