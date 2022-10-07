import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo'
import GetGihubUser from './components/GetGithubUser';
import AxiosInReact from './components/AxiosInReact';


const URL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
  //const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
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
      <AxiosInReact baseURL={URL}/>
    </div>
  );
}

export default App;
