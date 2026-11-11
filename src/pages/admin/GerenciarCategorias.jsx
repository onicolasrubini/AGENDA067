
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  obterCategorias,
  salvarCategorias,
} from "../../data/categorias.js";
import { obterEventos } from "../../data/eventos.js";

function GerenciarCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    setCategorias(obterCategorias());
  }, []);

  function cadastrarCategoria(event) {
    event.preventDefault();

    const nome = novaCategoria.trim();

    if (!nome) {
      setErro("Informe o nome da categoria.");
      return;
    }

    const existe = categorias.some(
      (categoria) =>
        categoria.toLowerCase() === nome.toLowerCase()
    );

    if (existe) {
      setErro("Esta categoria já está cadastrada.");
      return;
    }

    const atualizadas = [...categorias, nome];

    setCategorias(atualizadas);
    salvarCategorias(atualizadas);

    setNovaCategoria("");
    setErro("");
  }

  function removerCategoria(nome) {
    const eventos = obterEventos();

    const categoriaEmUso = eventos.some(
      (evento) => evento.categoria === nome
    );

    if (categoriaEmUso) {
      setErro(
        "Não é possível remover uma categoria que está sendo utilizada por um evento."
      );
      return;
    }

    const confirmar = window.confirm(
      `Deseja realmente remover a categoria "${nome}"?`
    );

    if (!confirmar) return;

    const atualizadas = categorias.filter(
      (categoria) => categoria !== nome
    );

    setCategorias(atualizadas);
    salvarCategorias(atualizadas);
    setErro("");
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
            Gerenciar categorias
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Organize as opções de classificação dos eventos.
          </p>
        </div>

        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold">Adicionar categoria</h2>

          <form
            onSubmit={cadastrarCategoria}
            className="mt-5 flex flex-col gap-3 sm:flex-row"
          >
            <input
              value={novaCategoria}
              onChange={(event) => {
                setNovaCategoria(event.target.value);
                setErro("");
              }}
              className={campo}
              placeholder="Nome da nova categoria"
              required
            />

            <button
              type="submit"
              className="shrink-0 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              + Adicionar
            </button>
          </form>

          {erro && (
            <p className="mt-3 text-sm text-red-600">
              {erro}
            </p>
          )}
        </section>

        <section className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-lg font-bold">
              Categorias cadastradas
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Total de {categorias.length} categoria(s).
            </p>
          </div>

          {categorias.length === 0 ? (
            <p className="px-6 py-10 text-center text-sm text-slate-500">
              Nenhuma categoria cadastrada.
            </p>
          ) : (
            <div className="divide-y divide-slate-100">
              {categorias.map((categoria) => (
                <div
                  key={categoria}
                  className="flex items-center justify-between gap-4 px-6 py-4"
                >
                  <span className="font-medium text-slate-700">
                    {categoria}
                  </span>

                  <button
                    onClick={() => removerCategoria(categoria)}
                    className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    Excluir
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

export default GerenciarCategorias;