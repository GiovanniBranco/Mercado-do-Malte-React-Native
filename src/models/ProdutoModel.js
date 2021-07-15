export default ProdutoModel = {
  name: 'Produto',
  primaryKey: 'nome',

  properties: {
    nome: 'string',
    preco: 'double',
    quantidade: 'int'
  },
};