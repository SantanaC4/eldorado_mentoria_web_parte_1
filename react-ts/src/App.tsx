import { useState } from 'react';
import Todos from './components/Todos';
//import Routes from './Routes';
import Todo from './models/todo'
import GetUserForm from './components/GetUserForm';
import GetGithubRepo from './components/GetGithubRepo';
import GetUserInformation from './components/GetUserInformation';
import Header from './components/Header';

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
      <>      
      <Header userNameHandler={userNameHandler}/>
      <GetUserForm onAddTodo={addTodoHandler} userNameHandler={userNameHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
      {userName.length ? <GetUserInformation userName={userName}/> : <p>Found no User</p>}
      {userName.length ? <GetGithubRepo userName={userName}/> : <p>Found no User</p>}
      </>
  );
}

export default App;