import React, {useState} from 'react';
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("Sejá bem vindo!");

  return(
   
    <div>
      <div className= "container">{message}</div>;
      <button onClick={() => setMessage("Olá usuário")}>
        Mudar mensagem
      </button>
    </div>
  );
};
 
export default App;