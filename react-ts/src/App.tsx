import { useState, useEffect } from 'react';
import axios from "axios"
import Todos from './components/Todos';
import React from 'react'
//import Routes from './Routes';
import Todo from './models/todo'
import GetGihubUser from './components/GetGithubUser';
import useGetGithubRepo from './components/useGetGithubRepo';
//import AxiosInReact from './components/AxiosInReact';
import { APIResponse, Repository } from './types/types'


//const URL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
  const repositories = useGetGithubRepo('santanac4');

  //if(repositories.length === 0) return null;
  
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
      {repositories.length 
        ? ( 
            <>
                {repositories.map((person: Repository) => (
                  <li key={person.id}>
                        <h1>{person.name}</h1>
                  </li>
                ))}
            </>
        )
        : <div>Loading..</div>}
    </div>
  );
}

export default App;