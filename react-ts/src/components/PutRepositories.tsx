import RepoItem from './RepoItem'
import { Repository } from '../models/types'

const PutRepositories: React.FC<{ items: Repository[] }> = (props) => {
    return (
        <ul>
         {props.items.map((item) =>  (
            <RepoItem key={item.id} text={item.name}/>
        ))}
        </ul>
    );
}

export default PutRepositories;