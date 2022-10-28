import React from 'react'
import { Container, Navbar, Form, Button } from  'react-bootstrap'

const Header: React.FC<{userNameHandler: (userName: string) => void}> = (props) => {
    const userTextInputRef = React.useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // !,?: operators to treat null values
        const enteredText = userTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        props.userNameHandler(enteredText);
    }
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Github Profile Search
                </Navbar.Brand>
                <Form onSubmit={submitHandler}>
                    <Form.Control
                    type="text"
                    placeholder="Type"
                    ref={userTextInputRef}/>
                    <Button type="submit">Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Header;
