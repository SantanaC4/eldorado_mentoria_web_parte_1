import { Repository } from "../models/types"
import  RepositoryItem  from "./RepositoryItem"

interface IReposListProps{
    repositories: Repository[];
}

const RepositoryList: React.FC<IReposListProps> = ({repositories}) => {

    const renderRepositoryList = ():JSX.Element[] => {
        return repositories.map(repository => {
           return <RepositoryItem key={ repository.id } item={repository}/> 
        });
    };
    return (
        <>
            {repositories.length > 0 && <h2 className='mt-5'>Repository List</h2>}
            <div id="Repository List">{ renderRepositoryList() }</div>
        </>
    );
};

export default RepositoryList;