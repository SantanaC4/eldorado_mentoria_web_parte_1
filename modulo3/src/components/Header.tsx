import React from 'react'
import { Container, Navbar, Form, Button } from  'react-bootstrap'

const Header: React.FC<{userNameHandler: (userName: string) => void; cleanButtonHandler: (cleanButton: boolean) => void}> = (props) => {
    //const userTextInputRef = React.useRef<HTMLInputElement>(null);
    const [clean, setClean] = React.useState<boolean>(false);
    const [enteredName, setEnteredName] = React.useState<string>('');

    const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    }
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // !,?: operators to treat null values
        //const enteredText = userTextInputRef.current!.value;

        if (enteredName.trim().length === 0) {
            // throw an error
            return;
        }

        props.userNameHandler(enteredName);
        setClean(true);
    }
    
    const cleanButton = () => {
        setClean(false);
        props.cleanButtonHandler(true);
        setEnteredName('');
    }

    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Github Profile Search
                </Navbar.Brand>
                <Form className="d-flex" onSubmit={submitHandler}>
                    <Form.Control
                    type="text"
                    placeholder="Type"
                    onChange={nameInputChangeHandler} value={enteredName}/>
                    <Button type="submit">Search</Button>
                </Form>
                {clean && <Button onClick={cleanButton}>Clean</Button>}
            </Container>
        </Navbar>
    )
}

export default Header;
