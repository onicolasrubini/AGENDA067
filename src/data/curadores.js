
const CHAVE_CURADORES = "agenda067_curadores";

const curadoresIniciais = [
  {
    id: 1,
    nome: "Pontes",
    email: "pontes@agenda067.com",
  },
  {
    id: 2,
    nome: "Rubini",
    email: "rubini@agenda067.com",
  },
];

export function obterCuradores() {
  const dados = localStorage.getItem(CHAVE_CURADORES);

  if (dados) {
    return JSON.parse(dados);
  }

  localStorage.setItem(
    CHAVE_CURADORES,
    JSON.stringify(curadoresIniciais)
  );

  return curadoresIniciais;
}

export function salvarCuradores(curadores) {
  localStorage.setItem(
    CHAVE_CURADORES,
    JSON.stringify(curadores)
  );
}
