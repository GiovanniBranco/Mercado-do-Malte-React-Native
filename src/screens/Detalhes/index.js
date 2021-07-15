import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import CardDetalhes from '../../components/CardDetalhes';
import Header from '../../components/Header';

import geral from '../../styles/geral';

function Detalhes({route, navigation}) {
  const {nome, categoria, preco, descricao} = route.params;

  return (
    <View style={geral.container}>
      <Header navigation={navigation} />
      <CardDetalhes
        nome={nome}
        categoria={categoria}
        preco={preco}
        descricao={descricao}
        navigation={navigation}
      />
    </View>
  );
}

export default Detalhes;
