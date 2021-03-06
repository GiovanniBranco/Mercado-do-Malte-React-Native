import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import geral from '../../styles/geral';
import formata from '../../utils/formata';

import styles from './styles';

function Card(props) {
  const {nome, categoria, preco, descricao} = props.produto;

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
        <Text style={geral.titulo}>{formata.formataPalavra(nome)}</Text>
        <Text style={geral.numero}>{formata.formataReal(preco)}</Text>
        <Text style={geral.subTitulo}>{formata.formataPalavra(categoria)}</Text>
        <TouchableOpacity
          style={styles.btnDetalhes}
          onPress={() =>
            props.navigation.push('Detalhes', {
              nome,
              categoria,
              preco,
              descricao,
            })
          }>
          <Text style={geral.btnText}>Detalhes</Text>
        </TouchableOpacity>

        <View style={styles.viewAvaliacao}>
          <Icon name="star" style={styles.starAvaliacao} />
          <Text style={styles.avaliacao}>
            {(3 + 2 * Math.random()).toFixed(1)}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Card;
