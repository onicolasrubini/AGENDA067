
const CHAVE_EVENTOS = "agenda067_eventos";

const eventosIniciais = [
  {
    id: 1,
    nome: "THIAGUINHO - EXPOGRANDE 2026",
    categoria: "Música",
    data: "28/04/2026",
    local: "R. Americo Carlos da Costa, 320, Campo Grande - MS",
    status: "Aprovado",
    descricao: "Expogrande em Campo Grande.",
  },
  {
    id: 2,
    nome: "Porco no Rolete",
    categoria: "Culinaria",
    data: "12/07/2026",
    local: "Rua Jamil Basmage, 996, Campo Grande - MS",
    status: "Pendente",
    descricao: "Evento beneficiente do porco no rolete.",
  },
  {
    id: 3,
    nome: "CAMPEONATO DE FARMAR AURA",
    categoria: "Outros",
    data: "02/12/2026",
    local: "Estacionamento do Aquario do Pantanal",
    status: "Rejeitado",
    descricao: "Competição de farmar aura.",
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
