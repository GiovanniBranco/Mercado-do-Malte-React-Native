import {StyleSheet} from 'react-native';

import cores from '../../styles/cores';
import fontes from '../../styles/fontes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cores.background,
        padding: 10,
    },
    containerTitulo: {
        
    },
    divisor: {
        height: 2,
        backgroundColor: '#ddd',
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
    },
    containerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: 40,
    },
    boleto: {
        color: cores.green500,
        fontSize: 24,
        fontWeight: '700',

    },
    cartao: {
        color: cores.green500,
        fontSize: 24,
        fontWeight: '700',
    },
    pix: {
        color: cores.green500,
        fontSize: 24,
        fontWeight: '700',
    },
    divisorMenu: {
        height: 30,
        width: 2,
        backgroundColor: cores.green400,
    },
    cartaoValidade: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputCartao: {
        width: '60%',
    },
    inputValidade: {
        width: '30%',
    },
    containerCvv: {
        marginTop: 30,
        flexDirection: 'row',
    },
    inputCvv: {
        width: '30%',
    },
    containerParcelas: {
        marginTop: 30,
        marginBottom: 30,
    },
    inputParcelas: {
        width: '60%',
    },
    containerTotal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    total: {
        color: cores.green500,
        fontSize: 32,
        fontWeight: '700',
    },
    valor: {
        color: cores.green500,
        fontSize: 32,
        fontWeight: '600',
    },
    containerBotoes: {
        width: '90%',
        alignSelf: 'center',
       
    },
    fechar: {
        marginTop: 20,
        padding: '2%',
    },
    voltar: {
        marginTop: 20,
        padding: '2%',
    },
    label: {
        fontWeight: 'bold',
    },
 }
)

export default styles;