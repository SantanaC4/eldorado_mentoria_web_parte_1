import { useState } from 'react';
import Todos from './components/Todos';
//import Routes from './Routes';
import Todo from './models/todo'
import GetGihubUser from './components/GetGithubUser';
import GetGithubRepo from './components/GetGithubRepo';

function App() {
  const [userName, setUserName] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const userNameHandler = (userName: string) => {
    setUserName(userName);  
  };
  
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div>
      <GetGihubUser onAddTodo={addTodoHandler} userNameHandler={userNameHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
      {userName.length ? <GetGithubRepo userName={userName}/> : <p>Found no User</p>}
    </div>
  );
}

export default App;