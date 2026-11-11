
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Painel from "./pages/Painel.jsx";
import PainelOrganizador from "./pages/organizer/PainelOrganizador.jsx";
import NovoEvento from "./pages/organizer/NovoEvento.jsx";
import PainelCurador from "./pages/curator/PainelCurador.jsx";
import PainelAdmin from "./pages/admin/PainelAdmin.jsx";
import GerenciarCuradores from "./pages/admin/GerenciarCuradores.jsx";
import GerenciarCategorias from "./pages/admin/GerenciarCategorias.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/painel/:perfil" element={<Painel />}/>
      <Route path="/painel/organizador/novo-evento" element={<NovoEvento />}/>
      <Route path="/painel/organizador" element={<PainelOrganizador />}/>
      <Route path="/painel/curador" element={<PainelCurador />}/>
      <Route path="/painel/admin" element={<PainelAdmin />}/>
      <Route path="/painel/admin/curadores" element={<GerenciarCuradores />}/>
      <Route path="/painel/admin/categorias" element={<GerenciarCategorias />}/>
    </Routes>
  );
}

  export default App;
