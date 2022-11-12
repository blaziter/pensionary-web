import React, { useState } from "react";
import { Layout } from '../../pages/Pages';
import { Form, Image } from 'react-bootstrap';
import { CgWebsite } from 'react-icons/cg';
import axios from "axios";

export interface User {
    username: String,
    password: String
}

const Login = () => {
    const [user, setUser] = useState(
        {
            username: '',
            password: ''
        }
    );

    const handleState = (e: string | any) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const LoginHandler = async (e: any) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { payload: user })
            .then(
                (res) => {
                    console.log(res);
                }
            )
            .catch(e);
    }

    return (
        <Layout>
            <div className='columns is-multiline'>
                <div className='column is-8 is-offset-2 register'>
                    <div className='columns'>
                        <div className="column left">
                            <Image src='login.png' />
                        </div>
                        <div className="column right has-text-centered">
                            <h1 className="title is-4">Přihlásit se</h1>
                            <Form onSubmit={LoginHandler}>
                                <Form.Group className='form-field' controlId='controlName'>
                                    <Form.Control name='username' className="form-input input is-medium" type="text" placeholder="Přihlašovací jméno" onChange={(e) => handleState(e)} />
                                </Form.Group>

                                <Form.Group className='form-field' controlId='controlPwd'>
                                    <Form.Control name='password' className="form-input input is-medium" type="password" placeholder="Heslo" onChange={(e) => handleState(e)} />
                                </Form.Group>
                                <button className="button is-block is-primary is-fullwidth is-medium">Submit</button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className='column is-8 is-offset-2'>
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <a href="http://www.zsst.cz/">
                                    <CgWebsite />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}

export default Login;