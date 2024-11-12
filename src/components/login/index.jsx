import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import Header from '../Header'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Login:", { username, password });
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} className="containerLogin">

          <div className="tituloLogin">
            <img src="./../../public/ifrs_vertical.png" alt="Logo IFRS"/>
            <h1>Entrar</h1>
          </div>

          <div className="inputsLogin">
            <div className="inputUserLogin">
            <label htmlFor="login">Login</label>
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Matrícula ou nome ????"
                id="login"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="inputPasswordLogin">
              <label htmlFor="password">Senha</label>
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Senha"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="btnSubmitLogin">
              <button type="submit">Acessar</button>
            </div>

          </div>
          
        </form>
      </div>
    </>
  );
};

export default Login;