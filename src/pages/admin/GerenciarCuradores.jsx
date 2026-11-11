
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  obterCuradores,
  salvarCuradores,
} from "../../data/curadores.js";

function GerenciarCuradores() {
  const [curadores, setCuradores] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    setCuradores(obterCuradores());
  }, []);

  function cadastrarCurador(event) {
    event.preventDefault();

    const emailExiste = curadores.some(
      (curador) =>
        curador.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (emailExiste) {
      setErro("Este e-mail já está cadastrado.");
      return;
    }

    const novoCurador = {
      id: Date.now(),
      nome: nome.trim(),
      email: email.trim(),
    };

    const atualizados = [...curadores, novoCurador];

    setCuradores(atualizados);
    salvarCuradores(atualizados);

    setNome("");
    setEmail("");
    setErro("");
  }

  function removerCurador(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja remover este curador?"
    );

    if (!confirmar) return;

    const atualizados = curadores.filter(
      (curador) => curador.id !== id
    );

    setCuradores(atualizados);
    salvarCuradores(atualizados);
  }

  const campo =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-2xl font-extrabold">
            AGENDA<span className="text-purple-600">067</span>
          </Link>

          <Link
            to="/painel/admin"
            className="text-sm font-semibold text-slate-600 hover:text-purple-600"
          >
            Voltar ao painel
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div>
          <p className="text-sm font-semibold text-purple-600">
            Administração
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Gerenciar curadores
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Cadastre e gerencie os usuários responsáveis pela curadoria.
          </p>
        </div>

        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold">Adicionar curador</h2>

          <form
            onSubmit={cadastrarCurador}
            className="mt-5 grid gap-4 md:grid-cols-2"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Nome completo
              </label>

              <input
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                className={campo}
                placeholder="Nome do curador"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                E-mail
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={campo}
                placeholder="curador@email.com"
                required
              />
            </div>

            {erro && (
              <p className="text-sm text-red-600 md:col-span-2">
                {erro}
              </p>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                + Cadastrar curador
              </button>
            </div>
          </form>
        </section>

        <section className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-lg font-bold">
              Curadores cadastrados
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Total de {curadores.length} curador(es).
            </p>
          </div>

          {curadores.length === 0 ? (
            <p className="px-6 py-10 text-center text-sm text-slate-500">
              Nenhum curador cadastrado.
            </p>
          ) : (
            <div className="divide-y divide-slate-100">
              {curadores.map((curador) => (
                <div
                  key={curador.id}
                  className="flex flex-col justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center"
                >
                  <div>
                    <h3 className="font-semibold">
                      {curador.nome}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {curador.email}
                    </p>
                  </div>

                  <button
                    onClick={() => removerCurador(curador.id)}
                    className="w-fit rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default GerenciarCuradores;