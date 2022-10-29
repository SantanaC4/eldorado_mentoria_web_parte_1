import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo'
import GetUserForm from './components/GetUserForm';
import GetGithubRepo from './components/GetGithubRepo';
import GetUserInformation from './components/GetUserInformation';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import { APIResponse, Repository, User } from './models/types'

function App() {
  const [reposList, setReposList] = useState<Repository[]>([]);
  const [userName, setUserName] = useState<string>('');
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

  // <GetUserForm onAddTodo={addTodoHandler} userNameHandler={userNameHandler}/>
  // <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
  // {userName.length ? <GetUserInformation userName={userName}/> : <p>Found no User</p>}
  // {userName.length ? <GetGithubRepo userName={userName}/> : <p>Found no User</p>}

  return (
      <>      
        <Header userNameHandler={userNameHandler}/>
        <Container className="mt-5">
          <Row>
              <Col>
                  {userName.length ? <GetUserInformation userName={userName}/> : <p>Found no User</p>}
              </Col>
              <Col>
                  <RepositoryList repositories={reposList}/>
              </Col>
          </Row>
        </Container>
      </>
  );
}

export default App;