import React, {useState} from 'react';
import Tasks from './components/Tasks';
import "./App.css";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title:"Estudar programação",
      completed: false,
    },
    {
      id:"2",
      title:"Ler livros",
      completed: true,
    },
  ]);

  return (
      <div>

        <div className = "container">
        <Tasks tasks = {tasks}/>
        </div>

      </div>
  );
};
 
export default App;
