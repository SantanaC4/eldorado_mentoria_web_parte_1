import { useState, useEffect } from 'react'
import React from 'react'
import { APIResponse, Repository } from '../models/types'
import { get } from '../fetchers/Fetchers'
import PutRepositories from "./PutRepositories";

const baseURL = 'https://api.github.com/users/';

const GetGithubRepo: React.FC<{userName: string}> = (props) => {
    const [data, setData] = useState<Repository[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getData() {
        setIsLoading(true);
        setError(null);
        try {
            const results = await get<APIResponse>(`${baseURL}${props.userName}/repos`);
            setData(results);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
        setIsLoading(false);
    },[props.userName]);

    return (
        <React.Fragment>
        <section>
            {!isLoading && data.length > 0 && <PutRepositories items={data}/>}
            {!isLoading && data.length === 0 && <p>Found no Repositories</p>}
            {isLoading && <p>Loading...</p>}
        </section>
        </React.Fragment>
    );
}

export default GetGithubRepo;