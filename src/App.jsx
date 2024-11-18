import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Login from "./components/Login";
import NovoCardapio from "./components/cardapio/NovoCardapio";
import ModalNovoItem from "./components/cardapio/ModalNovoItem";

function App() {
  return (
    <div className="App">
      <NovoCardapio />
      {/* <Login /> */}
      {/* <ModalNovoItem /> */}
    </div>
  );
}

export default App;
