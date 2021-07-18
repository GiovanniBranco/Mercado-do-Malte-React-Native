import React, {useEffect, useState} from 'react';
import {View, Image, Text, TextInput} from 'react-native';

import formata from '../../utils/formata';
import realmRepository from '../../repository/realmRepository';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

function CardGeladeira(props) {
  const {nome, quantidade, preco} = props.produto;

  const [quantidadeProduto, setQuantidadeProduto] = useState(quantidade);

  const {funcao} = props;

  useEffect(() => {}, [quantidadeProduto]);

  const atualiza = qtd => {
    const verificaInteiro = qtd.match(/^[0-9]*$/);
    if (!verificaInteiro) return;

    const removeZeroEsquerda = qtd.replace(/^(0)(.+)/, '$2');
    setQuantidade(removeZeroEsquerda);
  };

  const somarQuantidade = novaQuantidade => {
    setQuantidadeProduto(novaQuantidade);

    let atualizarProduto = {
      nome,
      preco,
      quantidade: quantidadeProduto + 1,
    };

    salvarNoBanco(atualizarProduto);
    funcao();
  };

  const diminuirQuantidade = novaQuantidade => {
    setQuantidadeProduto(novaQuantidade);

    let atualizarProduto = {
      nome,
      preco,
      quantidade: quantidadeProduto - 1,
    };
    salvarNoBanco(atualizarProduto);
    funcao();
  };

  const salvarNoBanco = async produto => {
    realmRepository.saveProduto(produto);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imagem}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={{
            uri: `https://ecommerce-serratec.herokuapp.com/produto/${nome}/imagem`,
          }}
        />
      </View>
      <View style={styles.quantidadeNome}>
        <Text style={styles.textoNomePreco}>{formata.formataPalavra(nome)}</Text>

        <View style={styles.viewQuantidade}>
          <Icon
            name="minuscircle"
            style={styles.icon}
            onPress={() => {
              diminuirQuantidade(quantidadeProduto - 1);
              if (quantidadeProduto < 2)
                realmRepository.deleteProdutoRealm(nome);
            }}
          />
          <TextInput
            keyboardType="number-pad"
            value={String(quantidadeProduto)}
            onChangeText={qtd => atualiza(qtd)}
            style={styles.inputQuantidade}
          />
          <Icon
            name="pluscircle"
            style={styles.icon}
            onPress={() => {
              somarQuantidade(quantidadeProduto + 1);
            }}
          />
        </View>
      </View>
      <View style={styles.viewValor}>
        <Text style={styles.textoNomePreco}>
          {formata.formataReal(quantidadeProduto * preco)}
        </Text>
      </View>
    </View>
  );
}

export default CardGeladeira;
