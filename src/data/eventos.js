
const CHAVE_EVENTOS = "agenda067_eventos";

const eventosIniciais = [
  {
    id: 1,
    nome: "Festival de Música",
    categoria: "Música",
    data: "24/11/2026",
    local: "Orla Morena",
    status: "Aprovado",
    descricao: "Festival de música em Campo Grande.",
  },
  {
    id: 2,
    nome: "Feira de Artesanato",
    categoria: "Cultura",
    data: "28/11/2026",
    local: "Feira Central",
    status: "Pendente",
    descricao: "Feira de artesanato regional.",
  },
  {
    id: 3,
    nome: "Mostra de Dança",
    categoria: "Dança",
    data: "02/12/2026",
    local: "Teatro Glauce Rocha",
    status: "Rejeitado",
    descricao: "Apresentações de dança.",
  },
];

export function obterEventos() {
  const dados = localStorage.getItem(CHAVE_EVENTOS);

  if (dados) {
    return JSON.parse(dados);
  }

  localStorage.setItem(CHAVE_EVENTOS, JSON.stringify(eventosIniciais));

  return eventosIniciais;
}

export function salvarEventos(eventos) {
  localStorage.setItem(CHAVE_EVENTOS, JSON.stringify(eventos));
}
