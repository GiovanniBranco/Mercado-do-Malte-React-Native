import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

function Card() {
  return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://ecommerce-serratec.herokuapp.com/produto/heineken/imagem',
            }}
          />
        </View>
        <View style={styles.containerInfos}>
          <Text>Heineken</Text>
          <Text>R$ 5,19</Text>
          <Text>Nacional</Text>
        </View>
      </View>
  );
}

export default Card;