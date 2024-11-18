import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Login from "./components/Login";
import NovoCardapio from "./components/cardapio/NovoCardapio";

function App() {
  return (
    <div className="App">
      <NovoCardapio />
      {/* <Login /> */}
    </div>
  );
}

export default App;
