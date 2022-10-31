import { Repository } from '../models/types'
import { Card } from "react-bootstrap";

const RepositoryItem: React.FC<{item: Repository}> = (props) => {
    return (
        <div className="mb-5">
            <Card>
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Subtitle>Language: {props.item.language}</Card.Subtitle>
                    <Card.Text>{props.item.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
        );
};

export default RepositoryItem;