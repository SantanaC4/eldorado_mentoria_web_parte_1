import { useState, useEffect } from "react"
import { User } from "../models/types"
import { useAxiosFetch } from "../fetchers/useAxiosFetch";
import { Card } from "react-bootstrap";

const GetUserInformation: React.FC<{userName: string}> = (props) => { 
    const [gitUserInfo, setGitUserInfo] = useState<User | null>(null);

    const [ data, error, loading, fetchData] = useAxiosFetch();

    useEffect(() => {
        if (data) {
            setGitUserInfo(data);
        } else {
            setGitUserInfo(null);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    useEffect(() => {
        if (loading) {
            console.log("Retrieving data");
        }
    }, [loading]);

    useEffect(() => {
        fetchData(`${props.userName}`);
    }, [props.userName]);

    return (
        <div className="mb-3">
            {gitUserInfo && 
                <Card className="mt-5">
                    <Card.Body>
                        <Card.Img variant="top" src={gitUserInfo.avatar_url}/>
                        <Card.Title>{gitUserInfo.name}</Card.Title>
                        <Card.Subtitle className="text-muted">{gitUserInfo.login}</Card.Subtitle>
                        <Card.Text>{gitUserInfo.bio}</Card.Text>
                    </Card.Body>
                </Card>
            }
        </div>
    );
}

export default GetUserInformation;