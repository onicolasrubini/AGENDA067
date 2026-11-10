
import { Link, useParams } from "react-router-dom";

const perfis = {
  organizador: {
    titulo: "Painel do Organizador",
    descricao: "Gerencie seus eventos e acompanhe as solicitações.",
    acoes: ["Cadastrar evento", "Meus eventos", "Acompanhar aprovação"],
  },
  curador: {
    titulo: "Painel do Curador",
    descricao: "Analise os eventos enviados para aprovação.",
    acoes: ["Eventos pendentes", "Eventos aprovados", "Eventos rejeitados"],
  },
  admin: {
    titulo: "Painel Administrativo",
    descricao: "Gerencie os usuários e as configurações da plataforma.",
    acoes: ["Gerenciar curadores", "Gerenciar categorias", "Todos os eventos"],
  },
};

function Painel() {
  const { perfil } = useParams();
  const dados = perfis[perfil];

  if (!dados) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
        <h1 className="text-2xl font-bold text-slate-900">
          Perfil não encontrado
        </h1>
        <Link to="/login" className="mt-4 text-purple-600 hover:underline">
          Voltar ao login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="flex items-center justify-between border-b bg-white px-6 py-5">
        <Link to="/" className="text-2xl font-extrabold">
          AGENDA<span className="text-purple-600">067</span>
        </Link>

        <Link
          to="/login"
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold transition hover:border-purple-600 hover:text-purple-600"
        >
          Sair
        </Link>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
          Área administrativa
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          {dados.titulo}
        </h1>

        <p className="mt-3 text-slate-600">
          {dados.descricao}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {dados.acoes.map((acao) => (
            <div
              key={acao}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-900">
                {acao}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Funcionalidade em desenvolvimento.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Painel;
