import { useState, useEffect } from 'react';
import axios from "axios"
import Todos from './components/Todos';
//import Routes from './Routes';
import Todo from './models/todo'
import GetGihubUser from './components/GetGithubUser';
//import AxiosInReact from './components/AxiosInReact';


//const URL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
  //const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  const [people, setpeople] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/santanac4/repos').then((response) => {
      console.log(response);

      setpeople(response?.data)
      debugger
    })
  },[]);


  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <GetGihubUser onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
      <h1>Github Profile Search</h1>
      {people.length 
        ? ( 
            <>
                {people.map((person: any) => (
                        <h1>{person.name}</h1>
                ))}
            </>
        )
        : <div>Loading..</div>}

    </div>
  );
}

export default App;