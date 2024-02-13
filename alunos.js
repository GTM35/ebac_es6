const alunos = [
  {
    nome: "Gustavo",
    nota: 9,
  },

  {
    nome: "João",
    nota: 5,
  },
  {
    nome: "Giovane",
    nota: 6,
  },
  {
    nome: "Lucas",
    nota: 4,
  },
  {
    nome: "Francisco",
    nota: 1,
  },
];

function alunosAprovados(alunos) {
  alunosAprovados = alunos.filter((aluno) => {
    return aluno.nota >= 6;
  });

  return alunosAprovados;
}

console.log(alunosAprovados(alunos));
