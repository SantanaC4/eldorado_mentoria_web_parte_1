import { useState, useEffect } from "react"
import { User } from "../models/types"
import { useAxiosFetch } from "../fetchers/useAxiosFetch";
import UserItem from "./UserItem"
import ImageImport from "./userNotFound.png";

const GetUserInformation: React.FC<{userName: string}> = (props) => { 
    const [gitUserInfo, setGitUserInfo] = useState<User | null>(null);
    const [ data, error, loading, fetchData] = useAxiosFetch();

    useEffect(() => {
        if (data) {
            setGitUserInfo(data);
        } else {
            setGitUserInfo(null);
        }
        console.log(data);
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log(error);
            setGitUserInfo({id: 0, name: 'User not Found', bio: `${error}`,
                public_repos: 0, login: 'ERROR', avatar_url: ImageImport 
        });
        }
    }, [error]);

    useEffect(() => {
        if (loading) {
            console.log("Retrieving data");
        }
    }, [loading]);

    useEffect(() => {
        fetchData(`${props.userName}`);
    }, [props.userName, fetchData]);

    return (
        <div className="mb-3">
            {gitUserInfo && <UserItem item={gitUserInfo}/>}
            {!gitUserInfo && error && <h2 className="mt-5">{error}</h2>}
        </div>
    );
}

export default GetUserInformation;