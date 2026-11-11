
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obterEventos, salvarEventos } from "../../data/eventos.js";

function PainelCurador() {
  const [eventos, setEventos] = useState([]);
  const [filtro, setFiltro] = useState("Pendente");
  const [eventoRejeicao, setEventoRejeicao] = useState(null);
  const [motivo, setMotivo] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    setEventos(obterEventos());
  }, []);

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

  function atualizarStatus(id, novoStatus, motivoRejeicao = "") {
    const eventosAtualizados = eventos.map((evento) =>
      evento.id === id
        ? {
            ...evento,
            status: novoStatus,
            motivoRejeicao,
          }
        : evento
    );

    setEventos(eventosAtualizados);
    salvarEventos(eventosAtualizados);
  }

  function aprovarEvento(id) {
    atualizarStatus(id, "Aprovado");
  }

  function abrirRejeicao(id) {
    setEventoRejeicao(id);
    setMotivo("");
    setErro("");
  }

  function confirmarRejeicao(id) {
    if (!motivo.trim()) {
      setErro("Informe o motivo da rejeição.");
      return;
    }

    atualizarStatus(id, "Rejeitado", motivo.trim());

    setEventoRejeicao(null);
    setMotivo("");
    setErro("");
  }

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
            Área do curador
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            Análise de eventos
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Analise os cadastros e decida quais eventos serão publicados.
          </p>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
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
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-bold">Eventos cadastrados</h2>

            <div className="flex flex-wrap gap-2">
              {["Pendente", "Aprovado", "Rejeitado", "Todos"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFiltro(status)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    filtro === status
                      ? "bg-purple-600 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-purple-300"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {eventosFiltrados.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-white px-5 py-12 text-center">
                <p className="font-semibold text-slate-700">
                  Nenhum evento encontrado.
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Não há cadastros nesta categoria no momento.
                </p>
              </div>
            ) : (
              eventosFiltrados.map((evento) => (
                <article
                  key={evento.id}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-bold">{evento.nome}</h3>

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
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-sm leading-6 text-slate-600">
                      {evento.descricao}
                    </p>

                    <div className="mt-3 grid gap-2 text-sm text-slate-500 sm:grid-cols-2">
                      <p>
                        <strong className="text-slate-700">Endereço:</strong>{" "}
                        {evento.endereco || "Não informado"}
                      </p>

                      <p>
                        <strong className="text-slate-700">Ingresso:</strong>{" "}
                        {evento.ingresso === "Pago"
                          ? `Pago — R$ ${Number(evento.valor).toFixed(2).replace(".", ",")}`
                          : "Gratuito"}
                      </p>
                    </div>

                    {evento.imagem && (
                      <a
                        href={evento.imagem}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block text-sm font-semibold text-purple-600 hover:underline"
                      >
                        Visualizar imagem do evento
                      </a>
                    )}

                    {evento.status === "Rejeitado" &&
                      evento.motivoRejeicao && (
                        <div className="mt-4 rounded-lg bg-red-50 p-4">
                          <p className="text-sm font-semibold text-red-700">
                            Motivo da rejeição
                          </p>
                          <p className="mt-1 text-sm text-red-600">
                            {evento.motivoRejeicao}
                          </p>
                        </div>
                      )}
                  </div>

                  {evento.status === "Pendente" && (
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      {eventoRejeicao === evento.id ? (
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Motivo da rejeição *
                          </label>

                          <textarea
                            value={motivo}
                            onChange={(event) => {
                              setMotivo(event.target.value);
                              setErro("");
                            }}
                            rows="3"
                            placeholder="Explique por que o evento não foi aprovado..."
                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          />

                          {erro && (
                            <p className="mt-2 text-sm text-red-600">
                              {erro}
                            </p>
                          )}

                          <div className="mt-3 flex flex-wrap justify-end gap-3">
                            <button
                              onClick={() => setEventoRejeicao(null)}
                              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                            >
                              Cancelar
                            </button>

                            <button
                              onClick={() => confirmarRejeicao(evento.id)}
                              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                            >
                              Confirmar rejeição
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-wrap justify-end gap-3">
                          <button
                            onClick={() => abrirRejeicao(evento.id)}
                            className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                          >
                            Rejeitar
                          </button>

                          <button
                            onClick={() => aprovarEvento(evento.id)}
                            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
                          >
                            Aprovar evento
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default PainelCurador;