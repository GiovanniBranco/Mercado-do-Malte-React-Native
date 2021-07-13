import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

function Card() {


  return (
    <>
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
        
      </View>
    </View>
    <View style={styles.container}>
      <Text>Card aqui</Text>
    </View>
    <View style={styles.container}>
      <Text>Card aqui</Text>
    </View>

    </>
  )
}

export default Card;