import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Login from "./components/Login";
import NovoCardapio from "./components/Cardapio";
import PgInicialUsuario from "./components/PgInicial/Usuario";
import PgInicialAdm from "./components/PgInicial/Adm";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/adicionarCardapio" element={<NovoCardapio />} />
                <Route path="/usuario" element={<PgInicialUsuario />} />
                <Route path="/adm" element={<PgInicialAdm />} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
