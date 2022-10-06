import React from "react";
import { useRef } from "react"

const GetGithubUser = () => {
    const userTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // !,?: operators to treat null values
        const enteredText = userTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
    };

    return (
        <form onSubmit={submitHandler}>
        <label htmlFor="text">Github Profile Search</label>
        <input type="text" placeholder="Type.." id="searchText" ref={userTextInputRef}/>
        <button>Search</button>
        </form>
    ); 
};

export default GetGithubUser; 