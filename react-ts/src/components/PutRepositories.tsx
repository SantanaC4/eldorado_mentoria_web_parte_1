import RepoItem from './RepoItem'
import { Repository } from '../models/types'

const PutRepositories: React.FC<{ items: Repository[] }> = (props) => {
    return (
        <ul>
         {props.items.map((item) =>  (
            <>
            <RepoItem key={item.id} repositoryName={item.name}/>
            <p>{item.language}</p>
            </>
        ))}
        </ul>
    );
}

export default PutRepositories;