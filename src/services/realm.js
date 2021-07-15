import Realm from 'realm';

import ProdutoModel from "../models/ProdutoModel";

export default function getRealm() {
  return Realm.open({schema: [ProdutoModel]});
}
