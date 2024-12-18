import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/login";
import NovoCardapio from "./components/Cardapio";
import PgInicialUsuario from "./components/PgInicial/Usuario";
import PgInicialAdm from "./components/PgInicial/Adm";
import IdentificacaoAluno from "./components/IdentificacaoAluno";
import AddUser from "./components/AddUser";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardapioList from "./components/cardapioList";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/adicionarCardapio" element={<NovoCardapio />} />
            <Route path="/cardapioList" element={<CardapioList />} />
            <Route path="/usuario" element={<PgInicialUsuario />} />
            <Route path="/adm" element={<PgInicialAdm />} />
            <Route
              path="/identificacaoAluno"
              element={<IdentificacaoAluno />}
            />
            <Route path="/addUser" element={<AddUser />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
