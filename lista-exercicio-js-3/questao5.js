function buscarAluno(lista, nomeBuscando) {
   for (let i = 0; i < lista.length; i++) {
      if (lista[i].nome.toLowerCase() == nomeBuscando.toLowerCase()) {
         return lista[i];
      }
   }

   return null;
}

let lista = [
   {nome: "Ana", idade: 20},
   {nome: "Bruno", idade: 22}
];

let nomeBuscado = "BRUNO";

console.log(buscarAluno(lista, nomeBuscado));