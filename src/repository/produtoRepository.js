import API from '../services/api';
import storage from '../utils/storage';

const getProdutos = async () => {
  try {
    const listaProdutos = await API.get('produto', {responseType: 'text'});
    if (listaProdutos.status !== 200) throw new Error('Erro!');

    return listaProdutos.data;
  } catch (error) {
    console.log(error);
  }
};

const finalizarPedido = async (listaProdutos, cliente) => {
  try {
    const pedido = await API.post('pedidos', {cliente: cliente, produto: listaProdutos});
    if (pedido.status !== 201) throw new Error('Erro!');
    await API.put(`pedidos/finalizar-pedido/${pedido.data.numeroPedido}`);
    return;
  } catch (error) {
    console.log(error);
  }
};

export default {getProdutos, finalizarPedido};
