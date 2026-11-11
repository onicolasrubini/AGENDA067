
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obterEventos } from "../../data/eventos.js";

function PainelAdmin() {
  const [eventos, setEventos] = useState([]);
  const [filtro, setFiltro] = useState("Todos");

  useEffect(() => {
    setEventos(obterEventos());
  }, []);

  const total = eventos.length;

  const pendentes = eventos.filter(
    (evento) => evento.status === "Pendente"
  ).length;

  const aprovados = eventos.filter(
    (evento) => evento.status === "Aprovado"
  ).length;

  const rejeitados = eventos.filter(
    (evento) => evento.status === "Rejeitado"
  ).length;

  const eventosFiltrados =
    filtro === "Todos"
      ? eventos
      : eventos.filter((evento) => evento.status === filtro);

  function corStatus(status) {
    if (status === "Aprovado") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Pendente") {
      return "bg-amber-100 text-amber-700";
    }

    return "bg-red-100 text-red-700";
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            AGENDA<span className="text-purple-600">067</span>
          </Link>

          <Link
            to="/login"
            className="text-sm font-semibold text-slate-600 transition hover:text-purple-600"
          >
            Sair
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div>
          <p className="text-sm font-medium text-purple-600">
            Administração
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            Painel administrativo
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Acompanhe os eventos e gerencie a plataforma Agenda067.
          </p>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Total de eventos</p>
            <p className="mt-2 text-3xl font-bold">{total}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Pendentes</p>
            <p className="mt-2 text-3xl font-bold text-amber-600">
              {pendentes}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Aprovados</p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {aprovados}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Rejeitados</p>
            <p className="mt-2 text-3xl font-bold text-red-600">
              {rejeitados}
            </p>
          </div>
        </section>

        
        <section className="mt-10">
            <h2 className="text-lg font-bold">Gerenciamento</h2>
            <p className="mt-1 text-sm text-slate-500">Acessos administrativos da plataforma.</p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Link
                to="/painel/admin/curadores"
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-purple-300 hover:shadow-sm"
                >
                <h3 className="font-bold">Gerenciar curadores</h3>

                <p className="mt-2 text-sm text-slate-500">
                    Cadastre, visualize e remova os usuários responsáveis pelas análises.
                </p>

                <p className="mt-5 text-sm font-semibold text-purple-600">
                    Acessar gerenciamento →
                </p>
                </Link>

                <Link
                to="/painel/admin/categorias"
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-purple-300 hover:shadow-sm"
                >
                <h3 className="font-bold">Gerenciar categorias</h3>

                <p className="mt-2 text-sm text-slate-500">
                    Adicione e organize as categorias disponíveis para os eventos.
                </p>

                <p className="mt-5 text-sm font-semibold text-purple-600">
                    Acessar gerenciamento →
                </p>
                </Link>
            </div>
        </section>

        <section className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-bold">Todos os eventos</h2>
              <p className="mt-1 text-sm text-slate-500">
                Visualize os cadastros e seus respectivos status.
              </p>
            </div>

            <select
              value={filtro}
              onChange={(event) => setFiltro(event.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 outline-none focus:border-purple-600"
            >
              <option value="Todos">Todos os status</option>
              <option value="Pendente">Pendentes</option>
              <option value="Aprovado">Aprovados</option>
              <option value="Rejeitado">Rejeitados</option>
            </select>
          </div>

          {eventosFiltrados.length === 0 ? (
            <div className="px-5 py-12 text-center">
              <p className="font-semibold text-slate-700">
                Nenhum evento encontrado.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Não existem eventos cadastrados neste filtro.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {eventosFiltrados.map((evento) => (
                <article
                  key={evento.id}
                  className="flex flex-col justify-between gap-3 px-5 py-5 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {evento.nome}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {evento.categoria} · {evento.data} · {evento.local}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${corStatus(
                      evento.status
                    )}`}
                  >
                    {evento.status}
                  </span>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default PainelAdmin;
