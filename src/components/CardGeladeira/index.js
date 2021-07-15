import React , {useState}from 'react';
import {View, Image, Text, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

function CardGeladeira({id, nome, quantidade,  preco, funcao}) {
  
  const [quantidadeProduto, setQuantidadeProduto] = useState(quantidade);
  const numeroString = String(quantidadeProduto);
  const atualiza = qtd => {
    const verificaInteiro = qtd.match(/^[0-9]*$/);
    if (!verificaInteiro) return;

    const removeZeroEsquerda = qtd.replace(/^(0)(.+)/, '$2');
    setQuantidade(removeZeroEsquerda);
  };
  const atualizarQuantidade =(novaQuantidade) =>{
    setQuantidadeProduto(novaQuantidade)
    funcao(quantidadeProduto)
    
  }
  return (
    <View style={styles.card}>
      <View style={styles.imagem}>
        <Image
          style={styles.img}
          resizeMode='contain'
          source={{
            uri: `https://ecommerce-serratec.herokuapp.com/produto/${nome}/imagem`,
          }}
        />
      </View>
      <View style={styles.quantidadeNome}>
          <Text style={styles.textoNomePreco}>{nome}</Text>

        <View style={styles.viewQuantidade} >
        <Icon
            name="minuscircle"
            style={styles.icon}
            onPress={() => {
              atualizarQuantidade(quantidadeProduto - 1);
                if (quantidadeProduto < 2) alert("retirar da geladeira o id " + id);
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
              atualizarQuantidade(quantidadeProduto + 1);
            }}
            />
        </View>
      </View>
      <View style={styles.viewValor}>
            <Text style={styles.textoNomePreco}>R$ {quantidadeProduto * preco}</Text>
      </View>
    </View>
  );
}

export default CardGeladeira;
