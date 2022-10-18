import { useState, useEffect } from "react"
import { APIResponse, Repository } from '../types/types'
import { get } from '../fetchers/Fetchers'

const baseURL = 'https://api.github.com/users/';

const useGetGithubRepo = (userName: string) => {
    const [data, setData] = useState<Repository[]>([]);

    useEffect(() => {
        async function getData() {
            const results = await get<APIResponse>(`${baseURL}${userName}/repos`);
            setData(results);
        }
        getData();
    },[]);

    return (data);
}

export default useGetGithubRepo;