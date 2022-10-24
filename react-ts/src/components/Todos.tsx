import React from 'react';
import Todo from '../models/todo'

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (todoId: string) => void}> = (props) => {
    return (
        <ul>
         {props.items.map(item => 
            (<li key={item.id} onClick={props.onRemoveTodo.bind(null, item.id)}>{item.text}</li>
        ))}
        </ul>
    );
}

export default Todos;