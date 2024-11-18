import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Login from "./components/Login";
import NovoCardapio from "./components/Cardapio/NovoCardapio";
import ModalNovoItem from "./components/Cardapio/ModalNovoItem";

function App() {
  return (
    <div className="App">
      {/* <NovoCardapio /> */}
      {/* <Login /> */}
      <ModalNovoItem />
    </div>
  );
}

export default App;
