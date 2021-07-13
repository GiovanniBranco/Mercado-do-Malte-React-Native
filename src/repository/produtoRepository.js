import API from "../services/api";

const getProdutos = async () => {
  try {
    const listaProdutos = await API.get('produto', {responseType: 'text'});
    if (listaProdutos.status !== 200) throw new Error('Erro!');
  
    return listaProdutos.data;
  } catch (error) {
    console.log(error);
  }
};

export default getProdutos;