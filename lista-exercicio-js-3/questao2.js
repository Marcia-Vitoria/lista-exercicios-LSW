const aluno = {
   nome: "Maria",
   curso: "ADS"
};

function apresentarAluno(aluno){
   let nome = aluno.nome.toUpperCase();
   console.log(`${nome} (${aluno.curso})`);
};

apresentarAluno(aluno);