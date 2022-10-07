import axios from "axios"
import React from "react"

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const AxiosInReact:React.FC<{baseURL: string}> = (props) => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(props.baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <h1>{post.login}</h1>
        </div>
    );
}

export default AxiosInReact;