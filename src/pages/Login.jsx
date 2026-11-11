
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("organizador");
  const [erro, setErro] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (!email.trim() || !senha.trim()) {
      setErro("Preencha o e-mail e a senha.");
      return;
    }

    setErro("");

    navigate(`/painel/${perfil}`);
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-700">
      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl bg-gray-100 p-8 shadow-xl">
          <Link
            to="/"
            className="text-xl font-semibold text-purple-600 hover:text-purple-800"
          >
            ⮜
          </Link>

          <h1 className="mt-8 text-center text-3xl font-bold text-slate-900">
            login.
          </h1>

          <p className="mt-2 text-center text-sm text-slate-500">
            Acesse sua conta no Agenda067
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                E-mail
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="usuario@email.com"
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Senha
              </label>

              <input
                type="password"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                placeholder="Digite sua senha"
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Entrar como
              </label>

              <select
                value={perfil}
                onChange={(event) => setPerfil(event.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
              >
                <option value="organizador">Organizador</option>
                <option value="curador">Curador</option>
                <option value="admin">Administrador</option>
              </select>
            </div>

            {erro && (
              <p className="text-sm font-medium text-red-600">
                {erro}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 p-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Entrar
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            Acesso demonstrativo para apresentação do projeto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
