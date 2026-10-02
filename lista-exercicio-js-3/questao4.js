function contarVogais(palavra){
   let vogais = "aeiou";
   let contador = 0;

   for (let i = 0; i < palavra.length; i++){
      if (vogais.includes(palavra[i].toLowerCase())){
         contador++;
      }
   }

   return contador;
}

console.log(contarVogais("JavaScript"));