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

  return (
    <div>
      <GetGihubUser onAddTodo={addTodoHandler} userNameHandler={userNameHandler}/>
      <Todos items={todos}/>
      {userName.length ? <GetGithubRepo userName={userName}/> : <p>Repositories not Found</p>}
      <h1>Github Profile Search</h1>
    </div>
  );
}

export default App;