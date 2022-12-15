import { useContext, useState } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import { Profile } from "./Profile";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="quadro">
          <img className="imagem" src="https://www.senff.com.br/app/themes/senff/resources/assets/images/icons/loginusuario.svg"></img>
          <h1>Você está logado</h1>
          <button className="logout" onClick={() => setIsAuthenticated(false)}>Logout</button>
        </div>
      ) : (
        <div className="quadro">
          <img className="imagem" src="https://www.senff.com.br/app/themes/senff/resources/assets/images/icons/loginusuario.svg"></img>
          <h1>Você não está logado</h1>
          <button className="login" onClick={() => setIsAuthenticated(true)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
