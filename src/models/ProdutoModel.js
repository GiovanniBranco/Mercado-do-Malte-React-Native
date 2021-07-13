export default ProdutoModel = {
  name: 'Produto',
  primaryKey: 'nome',

  properties: {
    nome: 'string',
    descricao: 'string',
    preco: 'double',
    categoria: 'string',
  },
};