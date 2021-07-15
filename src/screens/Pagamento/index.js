import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';

import Header from '../../components/Header';
import geral from '../../styles/geral';
import cores from '../../styles/cores';
import styles from './styles';
import {Dropdown} from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';

const Pagamento = () => {

    const data = [
        {label: '01', value: '1'},
        {label: '02', value: '2'},
        {label: '03', value: '3'},
        {label: '04', value: '4'},
        {label: '05', value: '5'},
        {label: '06', value: '6'},
        {label: '07', value: '7'},
        {label: '08', value: '8'},
        {label: '09', value: '9'},
        {label: '10', value: '10'},
        {label: '11', value: '11'},
        {label: '12', value: '12'},
    ];
    const [dropdown, setDropdown] = useState(null);

    const _renderItem = item => {
        return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
        </View>
        );
    };

    return (
        <>
            <Header/>

            <View style={styles.container}>
                <View style={styles.containerTitulo}>
                    <Text style={geral.tituloVerde}>Formas de Pagamento</Text>
                </View>

                <View style={styles.divisor}/>

                <View style={styles.containerMenu}>
                    <Text style={styles.boleto}>Boleto</Text>

                    <View style={styles.divisorMenu}/>

                    <Text style={styles.cartao}>Cartao de credito</Text>

                    <View style={styles.divisorMenu}/>
                    
                    <Text style={styles.pix}>Pix</Text>
                </View>

                <View style={styles.divisor}/>

                <View style={styles.containerInput}>
                    <View style={styles.cartaoValidade}>
                        <TextInput
                        mode="outlined"
                        label="Numero do cartao*"
                        style={styles.inputCartao}
                        />
                        {/* <DropDownPicker
                        items={[
                            {label: 'Item 1', value: 'item1'},
                            {label: 'Item 2', value: 'item2'},
                        ]}
                        defaultIndex={0}
                        containerStyle={{height: 40}}
                        onChangeItem={item => console.log(item.label, item.value)}
                        /> */}
                        <TextInput
                        mode="outlined"
                        label="Validade*"
                        style={styles.inputValidade}
                        />
                    
                    </View>

                    <View style={styles.containerCvv}>
                        <TextInput
                        mode="outlined"
                        label="CVV*"
                        style={styles.inputCvv}
                        />
                        <IconButton 
                        icon="credit-card-check"
                        color={cores.green400}
                        size={40}
                        style={styles.iconeCvv}
                        />
                    </View>

                    <View style={styles.containerParcelas}>
                        <TextInput
                        mode="outlined"
                        label="Numero de Parcelas"
                        placeholder="1x de R$ 15,00"
                        style={styles.inputParcelas}
                        />
                    </View>

                    <View style={styles.divisor}/>
                    
                    <View style={styles.containerTotal}>
                        <Text style={styles.total}>
                            Total
                        </Text>
                        <Text style={styles.valor}>
                            R$ 15,00
                        </Text>
                    </View>

                    <View style={styles.containerBotoes}>
                        <Button
                        style={styles.fechar}
                        labelStyle={geral.btnText}
                        mode="contained"
                        color={cores.green500}>
                            Fechar Pedido
                        </Button>
                        <Button
                        style={styles.voltar}
                        labelStyle={styles.label}
                        mode="outlined"
                        color={cores.green500}>
                            Voltar
                        </Button>
                    </View>
                </View>  
            </View>
        </>
    )
}

export default Pagamento;

