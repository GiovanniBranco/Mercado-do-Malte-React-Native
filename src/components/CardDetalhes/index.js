import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import realmRepository from '../../repository/realmRepository';
import storage from '../../utils/storage';
import formata from '../../utils/formata';

import geral from '../../styles/geral';
import styles from './styles';

function CardDetalhes(props) {
  const [token, setToken] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const {nome, descricao, categoria, preco} = props;

  const getToken = async () => {
    const token = await storage.getToken();
    setToken(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  const Produto = {
    nome: nome,
    preco: preco,
    quantidade: quantidade,
  };

  const numeroString = String(quantidade);
  const atualiza = qtd => {
    const verificaInteiro = qtd.match(/^[0-9]*$/);
    if (!verificaInteiro) return;

    const removeZeroEsquerda = qtd.replace(/^(0)(.+)/, '$2');
    setQuantidade(Number(removeZeroEsquerda));
  };

  return (
    <View style={geral.container}>
      <View style={styles.card}>
        <View style={styles.containerImage}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={{
              uri: `https://ecommerce-serratec.herokuapp.com/produto/${nome}/imagem`,
            }}
          />
        </View>
        <View style={styles.containerInfos}>
          <Text style={geral.titulo}>{formata.formataPalavra(nome)}</Text>
          <Text style={geral.texto}>{descricao}</Text>
          <Text style={geral.subTitulo}>
            {formata.formataPalavra(categoria)}
          </Text>
          <Text style={geral.numero}>{formata.formataReal(preco)}</Text>
        </View>
      </View>
      <View style={styles.viewQuantidade}>
        <Icon
          name="minuscircle"
          style={styles.icon}
          onPress={() => {
            if (quantidade > 1) setQuantidade(quantidade - 1);
          }}
        />
        <TextInput
          keyboardType="number-pad"
          value={numeroString}
          onChangeText={qtd => atualiza(qtd)}
          style={styles.inputQuantidade}
        />
        <Icon
          name="pluscircle"
          style={styles.icon}
          onPress={() => {
            setQuantidade(quantidade - 1 + 2);
          }}
        />
      </View>
      <View style={styles.viewBotao}>
        <TouchableOpacity
          onPress={() => {
            if (token !== null) {
              realmRepository.saveProduto(Produto);
              props.navigation.navigate('Home');
            } else {
              Alert.alert(
                'Ops...',
                'Voc?? precisa estar logado para adicionar a geladeira!',
              );
              realmRepository.saveProduto(Produto);
              props.navigation.navigate('Login');
            }
          }}
          style={styles.botao}>
          <Text style={geral.btnText}>Adicionar a geladeira</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (token !== null) {
              realmRepository.saveProduto(Produto);
              props.navigation.navigate('Geladeira');
            } else {
              Alert.alert(
                'Ops...',
                'Voc?? precisa estar logado para comprar agora!',
              );
              realmRepository.saveProduto(Produto);
              props.navigation.navigate('Login');
            }
          }}
          style={styles.botao}>
          <Text style={geral.btnText}>Comprar agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CardDetalhes;
