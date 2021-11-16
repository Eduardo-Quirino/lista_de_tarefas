import React, {useState} from 'react';
import "./App.css";


const App = () => {
  const [message, setMessage] = useState('Olá Usuário!');

  return (
      <div>

        <div className = "container">{message}</div>
        <button onClick ={() =>setMessage ("Sejá bem vindo!")}>Mudar mensagem</button>
      </div>
  );
};
 
export default App;
