
const CHAVE_CATEGORIAS = "agenda067_categorias";

const categoriasIniciais = [
  "Música",
  "Cultura",
  "Dança",
  "Teatro",
  "Gastronomia",
  "Esporte",
  "Outros",
];

export function obterCategorias() {
  const dados = localStorage.getItem(CHAVE_CATEGORIAS);

  if (dados) {
    return JSON.parse(dados);
  }

  localStorage.setItem(
    CHAVE_CATEGORIAS,
    JSON.stringify(categoriasIniciais)
  );

  return categoriasIniciais;
}

export function salvarCategorias(categorias) {
  localStorage.setItem(
    CHAVE_CATEGORIAS,
    JSON.stringify(categorias)
  );
}
