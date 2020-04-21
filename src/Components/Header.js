import React, {Component} from 'react';
import {Container, Navbar, Nav, Button, Form} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>

                    <Button variant="info" bg="light" size="lg" href="/">
                        Get Pizza
                    </Button>
                    <Navbar.Toggle />



                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav className="mr-auto">
                                <Nav.Link href="/orders" > <h5>My Orders</h5> </Nav.Link>
                                <Nav.Link href="/cart" > <h5>My Cart</h5>    </Nav.Link>
                            </Nav>
                        </Navbar.Text>


                    </Navbar.Collapse>

                </Container>
            </Navbar>
        );
    }
}

export default Header;