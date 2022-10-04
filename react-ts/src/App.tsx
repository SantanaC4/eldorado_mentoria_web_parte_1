import Todos from './components/Todos';
import Todo from './models/todo'
import GetGihubUser from './components/GetGithubUser';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return (
    <div>
      <Todos items={todos}/>
      <h1>Github Profile Search</h1>
      <GetGihubUser />
    </div>
  );
}

export default App;
