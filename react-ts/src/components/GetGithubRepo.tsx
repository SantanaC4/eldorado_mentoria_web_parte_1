import { useState, useEffect } from "react"
import { APIResponse, Repository } from '../models/types'
import { get } from '../fetchers/Fetchers'
import PutRepositories from "./PutRepositories";

const baseURL = 'https://api.github.com/users/';

const GetGithubRepo: React.FC<{userName: string}> = (props) => {
    const [data, setData] = useState<Repository[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const results = await get<APIResponse>(`${baseURL}${props.userName}/repos`);
            setData(results);
        }
        getData();
        setIsLoading(false);
    },[]);

    if(data.length === 0) return null;

    return (
        <div>
            {!isLoading && <PutRepositories items={data}/>}
            {isLoading && <p>Loading...</p>}
        </div>
    );
}

export default GetGithubRepo;