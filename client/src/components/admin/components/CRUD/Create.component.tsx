import axios from 'axios';
import React, { useState } from 'react';
import Menu from '../Menu';
import Nav from '../Nav';

const Create = () => {
    const [employee, setEmployee] = useState({
        suffix: '',
        prefix: '',
        name: '',
        role: '',
        availability: 0,
        shift: '',
        workplace: ''
    })

    const [user, setUser] = useState({
        username: '',
        password: '',
        role: 'admin'
    })

    const [mode, setMode] = useState('employee');

    const handleChange = (e: any) => {
        mode == 'employee' ? setEmployee(e.target.value == 'doctor' || 'nurse' ? { ...employee, [e.target.name]: e.target.value } : { ...employee, role: 'doctor'}) : setUser(e.target.value == 'admin' ? { ...user, [e.target.name]: e.target.value } : { ...user, role: 'admin'})
    }

    const add = () => {
        console.log(mode)
        mode != 'admin' ?
            console.log(employee)
            /*axios.post(`${import.meta.env.VITE_API_URL}/employee/new`, employee)
                .then(res => {
                    console.log(res);
                })*/
            :
            console.log(user)
        /*axios.post(`${import.meta.env.VITE_API_URL}/user/new`, user)
            .then(res => {
                console.log(res);
            })*/
    }

    return (
        <>
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <h1>CREATE</h1>
                        <form className='add-container'>
                            {
                                mode != 'admin' ?
                                    <>
                                        <div className='field create-field'>
                                            <label className='label'>Akademický titul</label>
                                            <div className='control'>
                                                <input name='prefix' className='input' type='text' placeholder='MUDr. PaedDr. PhD.' onChange={e => handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className='field create-field'>
                                            <label className='label'>Neakademický titul</label>
                                            <div className='control'>
                                                <input name='suffix' className='input' type='text' placeholder='DiS.' onChange={e => handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className='field create-field'>
                                            <label className='label'>Jméno a příjmení</label>
                                            <div className='control'>
                                                <input name='name' className='input' type='text' placeholder='Jméno a příjmení' onChange={e => handleChange(e)} />
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='field create-field'>
                                            <label className='label'>Přihlašovací jméno</label>
                                            <div className='control'>
                                                <input name='username' className='input' type='text' placeholder='Přihlašovací jméno' onChange={e => handleChange(e)} />
                                            </div>
                                        </div>
                                        <div className='field create-field'>
                                            <label className='label'>Heslo</label>
                                            <div className='control'>
                                                <input name='password' className='input' type='text' placeholder='Heslo' onChange={e => handleChange(e)} />
                                            </div>
                                        </div>
                                    </>
                            }
                            <div className='field create-field'>
                                <label className='label'>Role</label>
                                <div className='control'>
                                    <div className='select'>
                                        <select name='role' onChange={e => {
                                            e.target.value == 'admin' ? setMode('admin') : setMode('employee')
                                            handleChange(e)
                                        }
                                        }>
                                            <option value=''>Vybrat roli</option>
                                            <option value='admin'>Správce</option>
                                            <option value='doctor'>Doktor</option>
                                            <option value='nurse'>Sestřička</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {
                                mode != 'admin' ?
                                    <div className='field'>
                                        <label className='label'>Dostupnost</label>
                                        <div className='control swap-availability'>
                                            <label className='checkbox'>
                                                <input type='checkbox' name='availability' onChange={e => employee.availability == 0 ? setEmployee({ ...employee, availability: 1 }) : setEmployee({ ...employee, availability: 0 })} />
                                            </label>
                                        </div>
                                    </div>
                                    :
                                    <>
                                    </>
                            }
                        </form>
                        <button className='button crud float-right' onClick={add}>{mode != 'admin' ? 'Přidat zaměstnance' : 'Přidat správce'}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Create;