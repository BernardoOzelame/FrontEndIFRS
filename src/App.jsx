import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Login from "./components/Login";
import NovoCardapio from "./components/Cardapio";

function App() {
  return (
    <div className="App">
      <NovoCardapio />
      {/* <Login /> */}
    </div>
  );
}

export default App;
