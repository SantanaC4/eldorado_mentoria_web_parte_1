import { useState, useEffect, useCallback } from 'react'
import React from 'react'
import { APIResponse, Repository } from '../models/types'
import { get } from '../fetchers/Fetchers'
import PutRepositories from "./PutRepositories";


const GetGithubRepo: React.FC<{userName: string}> = (props) => {
    const [data, setData] = useState<Repository[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const getData = useCallback(async () => {
        setIsLoading(true);
        setError('');
        const results = await get<APIResponse>(`${props.userName}/repos`);
        if (typeof (results) === 'string') {
            setError(results);
        } else setData(results);
    },[props.userName]);

    useEffect(() => {
        getData();
        setIsLoading(false);
    },[getData]);

    return (
        <React.Fragment>
        <section id='repositoryContainer'>
            {!isLoading && data.length > -1 && <PutRepositories items={data}/>}
            {!isLoading && data.length === -1 && <p>Found no Repositories</p>}
            {!isLoading && error.length > -1 && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
        </section>
        </React.Fragment>
    );
}

export default GetGithubRepo;