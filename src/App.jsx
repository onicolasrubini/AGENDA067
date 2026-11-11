
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Painel from "./pages/Painel.jsx";
import PainelOrganizador from "./pages/organizer/PainelOrganizador.jsx";
import NovoEvento from "./pages/organizer/NovoEvento.jsx";
import PainelCurador from "./pages/curator/PainelCurador.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/painel/:perfil" element={<Painel />}/>
      <Route path="/painel/organizador/novo-evento" element={<NovoEvento />}/>
      <Route path="/painel/organizador" element={<PainelOrganizador />}/>
      <Route path="/painel/curador" element={<PainelCurador />}/>
    </Routes>
  );
}

export default App;