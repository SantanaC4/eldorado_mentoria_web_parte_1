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
import { get } from './fetchers/Fetchers'


//const URL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
  //const people = useGetGithubRepo();
  //const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  const [people, setpeople] = useState<Repository[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await get<APIResponse>('https://api.github.com/users/santanac4/repos');
      setpeople(data);
    }
    //axios.get('https://api.github.com/users/santanac4/repos').then((response) => {
    //console.log(response);

    //setpeople(response?.data);
    //})
    getData();
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
                {people.map((person: Repository) => (
                        <h1>{person.name}</h1>
                ))}
            </>
        )
        : <div>Loading..</div>}
    </div>
  );
}

export default App;