import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo'
import GetGihubUser from './components/GetGithubUser';

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
    </div>
  );
}

export default App;
