function cadastrarProduto(lista, nome, preco){
   const produto = {
      nome: nome,
      preco: preco
   }
   lista.push(produto);
   return lista.length;
}

let lista = [];

console.log(cadastrarProduto(lista, "Pirulito", 2));
console.log(cadastrarProduto(lista, "Feijão", 10));

console.log("lista =", lista);