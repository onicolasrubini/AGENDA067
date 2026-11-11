
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obterEventos } from "../../data/eventos.js";

function PainelOrganizador() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setEventos(obterEventos());
  }, []);

  const total = eventos.length;

  const aprovados = eventos.filter(
    (evento) => evento.status === "Aprovado"
  ).length;

  const pendentes = eventos.filter(
    (evento) => evento.status === "Pendente"
  ).length;

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
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-purple-600">
              Área do organizador
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight">
              Meu painel
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Acompanhe e gerencie seus eventos.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/painel/organizador/novo-evento"
              className="rounded-lg bg-purple-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              + Cadastrar novo evento
            </Link>
          </div>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Total de eventos</p>
            <p className="mt-2 text-3xl font-bold">{total}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Aprovados</p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {aprovados}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Aguardando análise</p>
            <p className="mt-2 text-3xl font-bold text-amber-600">
              {pendentes}
            </p>
          </div>
        </section>

        <section
          id="meus-eventos"
          className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="border-b border-slate-200 px-5 py-5">
            <h2 className="text-lg font-bold">Meus eventos</h2>
            <p className="mt-1 text-sm text-slate-500">
              Consulte a situação dos seus cadastros.
            </p>
          </div>

          {eventos.length === 0 ? (
            <div className="px-5 py-12 text-center">
              <p className="font-semibold text-slate-700">
                Você ainda não cadastrou eventos.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Comece cadastrando seu primeiro evento.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {eventos.map((evento) => (
                <article
                  key={evento.id}
                  className="flex flex-col justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center"
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

export default PainelOrganizador;