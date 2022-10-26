import React, { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = (props: Props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='layout-navbar'>
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/status'>
                                <Nav.Link>
                                    Stavy zaměstnanců
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    Přihlásit se
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className='main-content'>
                {props.children}
            </Container>
        </>
    )
}

export default Layout;