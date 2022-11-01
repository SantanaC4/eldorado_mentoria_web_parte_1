import { User } from '../models/types'
import { Card, ListGroup } from "react-bootstrap";

const UserItem: React.FC<{item: User}> = (props) => {
    return (
                <Card className="mt-5">
                    <Card.Body>
                        <Card.Img variant="top" src={props.item.avatar_url}/>
                        <Card.Title>{props.item.name}</Card.Title>
                        <Card.Subtitle className="text-muted">{props.item.login}</Card.Subtitle>
                        <Card.Text>{props.item.bio}</Card.Text>
                        <ListGroup>
                            <ListGroup.Item>Repositories {props.item.public_repos}</ListGroup.Item>
                            <ListGroup.Item>Followers {props.item.public_repos}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
    );
}

export default UserItem;