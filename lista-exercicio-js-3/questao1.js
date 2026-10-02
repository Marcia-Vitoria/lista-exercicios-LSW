let nomes = ["ana", "bruno", "carla"];

function nomesMaiusculos(nomes){
   let maiusculo = [];

   for (let i = 0; i < nomes.length; i++){
      maiusculo.push(nomes[i].toUpperCase());
   }

   return maiusculo;
}

console.log(nomesMaiusculos(nomes));