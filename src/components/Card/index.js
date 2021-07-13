import React from 'react';
import {View, Text, Image} from 'react-native';

import geral from '../../styles/geral';
import formata from '../../utils/formata';

import styles from './styles';

function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.img}
          source={{
            uri: `https://ecommerce-serratec.herokuapp.com/produto/${props.nome}/imagem`,
          }}
        />
      </View>
      <View style={styles.containerInfos}>
        <Text style={geral.titulo}>
          {formata.formataPalavra(props.nome)}
        </Text>
        <Text style={geral.numero}>
          {formata.formataReal(props.preco)}
          {console.warn(typeof(props.preco))}
        </Text>
        <Text style={geral.subTitulo}>
          {formata.formataPalavra(props.categoria)}
        </Text>

      </View>
    </View>
  );
}

export default Card;
