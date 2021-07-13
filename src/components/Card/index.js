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
          <Text style={styles.nome}>Heineken</Text>
          <Text style={styles.preco}>R$ 5,19</Text>
          <Text style={styles.categoria}>Nacional</Text>
        </View>
      </View>

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
          <Text style={styles.nome}>Heineken</Text>
          <Text style={styles.preco}>R$ 5,19</Text>
          <Text style={styles.categoria}>Nacional</Text>
        </View>
      </View>

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
          <Text style={styles.nome}>Heineken</Text>
          <Text style={styles.preco}>R$ 5,19</Text>
          <Text style={styles.categoria}>Nacional</Text>
        </View>
      </View>

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
          <Text style={styles.nome}>Heineken</Text>
          <Text style={styles.preco}>R$ 5,19</Text>
          <Text style={styles.categoria}>Nacional</Text>
        </View>
      </View>
      

      
    
    </>
  );
}

export default Card;
