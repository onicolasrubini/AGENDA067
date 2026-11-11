
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { obterEventos, salvarEventos } from "../../data/eventos.js";

function NovoEvento() {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    inicio: "",
    termino: "",
    local: "",
    endereco: "",
    imagem: "",
    ingresso: "Gratuito",
    valor: "",
  });

  const [erro, setErro] = useState("");

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  }

  function cadastrarEvento(event) {
    event.preventDefault();

    if (
      new Date(formulario.termino) <=
      new Date(formulario.inicio)
    ) {
      setErro("A data de término deve ser posterior à data de início.");
      return;
    }

    if (
      formulario.ingresso === "Pago" &&
      Number(formulario.valor) <= 0
    ) {
      setErro("Informe um valor válido para o ingresso.");
      return;
    }

    const eventosAtuais = obterEventos();

    const novoEvento = {
      id: Date.now(),
      ...formulario,
      data: new Date(formulario.inicio).toLocaleDateString("pt-BR"),
      status: "Pendente",
      valor:
        formulario.ingresso === "Gratuito"
          ? 0
          : Number(formulario.valor),
    };

    salvarEventos([...eventosAtuais, novoEvento]);

    navigate("/painel/organizador");
  }

  const campo =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100";

  const rotulo = "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-2xl font-extrabold">
            AGENDA<span className="text-purple-600">067</span>
          </Link>

          <Link
            to="/painel/organizador"
            className="text-sm font-semibold text-slate-600 hover:text-purple-600"
          >
            Voltar ao painel
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold text-purple-600">
            Área do organizador
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Cadastrar evento
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Preencha as informações para enviar seu evento para análise.
          </p>
        </div>

        <form
          onSubmit={cadastrarEvento}
          className="space-y-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <section>
            <h2 className="mb-5 text-lg font-bold">
              Informações do evento
            </h2>

            <div className="space-y-5">
              <div>
                <label className={rotulo}>Nome do evento *</label>
                <input
                  name="nome"
                  value={formulario.nome}
                  onChange={atualizarCampo}
                  className={campo}
                  placeholder="Ex.: Festival de Música"
                  required
                />
              </div>

              <div>
                <label className={rotulo}>Descrição *</label>
                <textarea
                  name="descricao"
                  value={formulario.descricao}
                  onChange={atualizarCampo}
                  className={campo}
                  rows="4"
                  placeholder="Descreva seu evento..."
                  required
                />
              </div>

              <div>
                <label className={rotulo}>Categoria *</label>
                <select
                  name="categoria"
                  value={formulario.categoria}
                  onChange={atualizarCampo}
                  className={campo}
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Música">Música</option>
                  <option value="Cultura">Cultura</option>
                  <option value="Dança">Dança</option>
                  <option value="Teatro">Teatro</option>
                  <option value="Gastronomia">Gastronomia</option>
                  <option value="Esporte">Esporte</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-100 pt-7">
            <h2 className="mb-5 text-lg font-bold">
              Data e horário
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={rotulo}>Início *</label>
                <input
                  type="datetime-local"
                  name="inicio"
                  value={formulario.inicio}
                  onChange={atualizarCampo}
                  className={campo}
                  required
                />
              </div>

              <div>
                <label className={rotulo}>Término *</label>
                <input
                  type="datetime-local"
                  name="termino"
                  value={formulario.termino}
                  onChange={atualizarCampo}
                  className={campo}
                  min={formulario.inicio || undefined}
                  required
                />
              </div>
            </div>
          </section>

          <section className="border-t border-slate-100 pt-7">
            <h2 className="mb-5 text-lg font-bold">
              Local do evento
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={rotulo}>Nome do local *</label>
                <input
                  name="local"
                  value={formulario.local}
                  onChange={atualizarCampo}
                  className={campo}
                  placeholder="Ex.: Orla Morena"
                  required
                />
              </div>

              <div>
                <label className={rotulo}>Endereço completo *</label>
                <input
                  name="endereco"
                  value={formulario.endereco}
                  onChange={atualizarCampo}
                  className={campo}
                  placeholder="Rua, número, bairro..."
                  required
                />
              </div>
            </div>
          </section>

          <section className="border-t border-slate-100 pt-7">
            <h2 className="mb-5 text-lg font-bold">
              Imagem do evento
            </h2>

            <div>
              <label className={rotulo}>Link da imagem *</label>
              <input
                type="url"
                name="imagem"
                value={formulario.imagem}
                onChange={atualizarCampo}
                className={campo}
                placeholder="https://exemplo.com/imagem.jpg"
                required
              />
              <p className="mt-2 text-xs text-slate-500">
                Informe um endereço público de uma imagem do evento.
              </p>
            </div>
          </section>

          <section className="border-t border-slate-100 pt-7">
            <h2 className="mb-5 text-lg font-bold">
              Ingressos
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={rotulo}>Tipo de ingresso *</label>
                <select
                  name="ingresso"
                  value={formulario.ingresso}
                  onChange={atualizarCampo}
                  className={campo}
                >
                  <option value="Gratuito">Gratuito</option>
                  <option value="Pago">Pago</option>
                </select>
              </div>

              {formulario.ingresso === "Pago" && (
                <div>
                  <label className={rotulo}>Valor do ingresso (R$) *</label>
                  <input
                    type="number"
                    name="valor"
                    value={formulario.valor}
                    onChange={atualizarCampo}
                    className={campo}
                    placeholder="Ex.: 50,00"
                    min="0.01"
                    step="0.01"
                    required
                  />
                </div>
              )}
            </div>
          </section>

          {erro && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {erro}
            </p>
          )}

          <div className="flex flex-col-reverse justify-end gap-3 border-t border-slate-100 pt-6 sm:flex-row">
            <Link
              to="/painel/organizador"
              className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancelar
            </Link>

            <button
              type="submit"
              className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Cadastrar evento
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default NovoEvento;
