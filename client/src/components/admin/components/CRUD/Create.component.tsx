import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import Nav from '../Nav';

const Create = () => {
    const navigate = useNavigate();
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

    const [errName, setErrName] = useState(false)
    const [errUsername, setErrUsername] = useState(false)
    const [errPassword, setErrPassword] = useState(false)
    const [errShift, setErrShift] = useState(false)
    const [errWorkplace, setErrWorkplace] = useState(false)
    const [errRole, setErrRole] = useState(false)
    const [status, setStatus] = useState('')
    const [redir, setRedir] = useState(false);

    const [mode, setMode] = useState('employee');

    const handleChange = (e: any) => {
        mode == 'employee' ? setEmployee(e.target.value == 'doctor' || 'nurse' ? { ...employee, [e.target.name]: e.target.value } : { ...employee, role: 'doctor' }) : setUser(e.target.value == 'admin' ? { ...user, [e.target.name]: e.target.value } : { ...user, role: 'admin' })
        employee.role == 'admin' ? setEmployee({ ...employee, [e.target.name]: e.target.value }) : null
        user.role != 'admin' ? setUser({ ...user, role: 'admin' }) : null
    }

    const add = () => {
        axios.defaults.withCredentials = true;
        if (mode == 'admin') {
            if (user.username == '') setErrUsername(true)
            if (user.password == '') return setErrPassword(true)
        }
        if (mode == 'employee') {
            if (employee.name == '') setErrName(true)
            if (employee.shift == '') setErrShift(true)
            if (employee.workplace == '') setErrWorkplace(true)
            if (user.role == '' || employee.role == '') return setErrRole(true)
        }
        mode != 'admin' ?
            axios.post(`${import.meta.env.VITE_API_URL}/employee/new`, employee, { withCredentials: true })
                .then(res => {
                    if (res.status == 200) {
                        setStatus('success');
                        setTimeout(() => {
                            setRedir(true);
                        }, 3000)
                    }
                })
                .catch(err => {
                    setStatus('error');
                })
            :
            axios.post(`${import.meta.env.VITE_API_URL}/user/new`, user, { withCredentials: true })
                .then(res => {
                    if (res.status == 200) {
                        setStatus('success');
                        setTimeout(() => {
                            setRedir(true);
                        }, 3000)
                    }
                })
                .catch(err => {
                    setStatus('error');
                })
    }

    return (
        <>
            {redir ? navigate(-1) : null}
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <form className='create-update-container'>
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
                                                <input required name='name' className={errName ? 'input is-danger' : 'input'} type='text' placeholder='Jméno a příjmení' onChange={e => {
                                                    setErrName(false)
                                                    handleChange(e)
                                                }} />
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='field create-field'>
                                            <label className='label'>Přihlašovací jméno</label>
                                            <div className='control'>
                                                <input required name='username' className={errUsername ? 'input is-danger' : 'input'} type='text' placeholder='Přihlašovací jméno' onChange={e => {
                                                    setErrUsername(false)
                                                    handleChange(e)
                                                }} />
                                            </div>
                                        </div>
                                        <div className='field create-field'>
                                            <label className='label'>Heslo</label>
                                            <div className='control'>
                                                <input required name='password' className={errPassword ? 'input is-danger' : 'input'} type='text' placeholder='Heslo' onChange={e => {
                                                    setErrPassword(false)
                                                    handleChange(e)
                                                }} />
                                            </div>
                                        </div>
                                    </>
                            }
                            <div className='field create-field'>
                                <label className='label'>Role</label>
                                <div className='control'>
                                    <div className={errRole ? 'select is-danger' : 'select'}>
                                        <select required name='role' onChange={e => {
                                            e.target.value == 'admin' ? setMode('admin') : setMode('employee')
                                            setErrName(false)
                                            setErrUsername(false)
                                            setErrPassword(false)
                                            setErrRole(false)
                                            setErrShift(false)
                                            setErrWorkplace(false)
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
                                    <>
                                        <div className='field'>
                                            <label className='label'>Dostupnost</label>
                                            <div className='control swap-availability'>
                                                <label className='checkbox'>
                                                    <input type='checkbox' name='availability' onChange={e => employee.availability == 0 ? setEmployee({ ...employee, availability: 1 }) : setEmployee({ ...employee, availability: 0 })} />
                                                </label>
                                            </div>
                                        </div>
                                        <div className='field create-field'>
                                            <label className='label'>Směna</label>
                                            <div className='control'>
                                                <div className={errShift ? 'select is-danger' : 'select'}>
                                                    <select required name='shift' onChange={e => {
                                                        setErrShift(false)
                                                        handleChange(e)
                                                    }}>
                                                        <option value=''>Vybrat směnu</option>
                                                        <option value='day'>Denní</option>
                                                        <option value='night'>Noční</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='field create-field'>
                                            <label className='label'>Oddělení</label>
                                            <div className='control'>
                                                <div className={errWorkplace ? 'select is-danger' : 'select'}>
                                                    <select required name='workplace' onChange={e => {
                                                        setErrWorkplace(false)
                                                        handleChange(e)
                                                    }}>
                                                        <option value=''>Vybrat oddělení</option>
                                                        <option value='village'>Vesnička</option>
                                                        <option value='first-floor'>První patro</option>
                                                        <option value='ground-floor'>Přízemí</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                    </>
                            }
                        </form>

                        {errUsername ? <p className='has-text-danger'>Vyplňte přihlašovací jméno</p> : null}
                        {errPassword ? <p className='has-text-danger'>Vyplňte heslo</p> : null}
                        {errName ? <p className='has-text-danger'>Vyplňte jméno a příjmení</p> : null}
                        {errRole ? <p className='has-text-danger'>Vyberte roli</p> : null}
                        {errShift ? <p className='has-text-danger'>Vyberte směnu</p> : null}
                        {errWorkplace ? <p className='has-text-danger'>Vyberte oddělení</p> : null}
                        {status == 'success' ? mode == 'admin' ? <p className='has-text-success'>Správce byl úspěšně přidán, přesměrování bude za 3 sekundy</p> : <p className='has-text-success'>Zaměstnanec/zaměstnankyně byl/a úspěšně přidán/a, přesměrování bude za 3 sekundy</p> : status == 'error' ? <p className='has-text-danger'>Přidání zaměstnance/zaměstnankyně se nezdařilo</p> : null}

                        <button className='button crud float-right' onClick={add} disabled={status == 'success' ? true : false}>{mode != 'admin' ? 'Přidat zaměstnance/zaměstnankyni' : 'Přidat správce'}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Create;