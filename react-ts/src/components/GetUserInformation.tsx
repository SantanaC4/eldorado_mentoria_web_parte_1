import { useState, useEffect } from "react"
import { User } from '../models/types'
import { useAxiosFetch } from "../fetchers/useAxiosFetch";

const GetUserInformation: React.FC<{userName: string}> = (props) => { 
    const [gitUserInfo, setGitUserInfo] = useState<User | null>(null);

    const [ data, error, loading, fetchData] = useAxiosFetch();
    console.log(data);

    useEffect(() => {
        if (data) {
            setGitUserInfo(data);
        }
    }, [data]);

    useEffect(() => {
        fetchData(`${props.userName}`);
    }, [props.userName]);

    return (
        <>
        {gitUserInfo && 
        <><div className="userInformation">
                <img src={gitUserInfo.avatar_url}/>
                </div><p>{gitUserInfo.name}</p>
        </>}
        </>
    );
}

export default GetUserInformation;