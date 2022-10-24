import React, { useState } from "react";
import { Layout } from '../../pages/Pages';
import { Card, Form, Image, Stack } from 'react-bootstrap';
import axios from "axios";

export interface User {
    username: String,
    password: String
}

const Login = () => {
    const BASE_URL = "http://localhost:8080";
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const LoginHandler = async (e: any) => {
        e.preventDefault();
        await axios.post(`${BASE_URL}/api/login`, user)
            .then()
            .catch(e);
    }

    return (
        <Layout>
            <Card className='align-center login-wrapper'>
                <Card.Body>
                    <Stack direction="horizontal" className='mobile-stack'>
                        <Image src='login.png' width='360px' className='' />
                        <div className='divider' role='separator' />
                        <Form onSubmit={LoginHandler} className='is-pulled-right login-form'>
                            <Stack>
                                <Form.Group className="mb-3" controlId="formGroupUsername">
                                    <Form.Label>Přihlašovací jméno</Form.Label>
                                    <Form.Control onChange={e => setUser({ ...user, username: e.target.value.trim() })} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Heslo</Form.Label>
                                    <Form.Control onChange={e => setUser({ ...user, password: e.target.value.trim() })} type="password" required />
                                </Form.Group>
                                <button className='button is-info is-pulled-right' type="submit">
                                    Přihlásit se
                                </button>
                            </Stack>
                        </Form>
                    </Stack>
                </Card.Body>
            </Card>
        </Layout>
    );
}

export default Login;