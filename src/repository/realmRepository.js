import getRealm from '../services/realm';

const saveProduto = async produto => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      realm.create(
        'Produto',
        {
          nome: produto.nome,
          preco: produto.preco,
          quantidade: produto.quantidade,
        },
        'modified',
      );
    });
  } catch (error) {
    console.log(error);
  }
};

const getProdutoRealm = async () => {
  const realm = await getRealm();
  const realmProdutos = realm.objects('Produto');

  return realmProdutos;
};

const deleteProdutoRealm = async nome => {
  const realm = await getRealm();

  realm.write(() => {
    const realmProdutos = realm.objects('Produto');
    const filter = realmProdutos.filter(p => p.nome == nome);
    realm.delete(filter);
  });
};

const deleteRealm = async () => {
  const realm = await getRealm();

  realm.write(() => {
    const realmProdutos = realm.objects('Produto');
    realm.delete(realmProdutos);
  });
};

export default {
  saveProduto,
  getProdutoRealm,
  deleteProdutoRealm,
  deleteRealm,
};
