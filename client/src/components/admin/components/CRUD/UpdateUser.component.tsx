import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../Menu';
import Nav from '../Nav';

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [edit, setEdit] = useState({
        USERID: '',
        USERNAME: '',
        PASSWORD: ''
    });
    const [status, setStatus] = useState('');
    const [redir, setRedir] = useState(false);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/user/${id}`, { withCredentials: true })
            .then(async res => {
                const data = await res.data[0];
                setEdit(data)
            })
    }, [])

    const handleChange = (e: any) => {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    }

    const handlePost = () => {
        axios.defaults.withCredentials = true;
        axios.put(`${import.meta.env.VITE_API_URL}/user/${edit.USERID}`, edit, { withCredentials: true })
            .then(async res => {
                setStatus('success')
                setTimeout(() => {
                    setRedir(true);
                }, 3000)
            })
            .catch(err => {
                setStatus('error')
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
                            <div className='field create-field'>
                                <label className='label'>Uživatelské jméno</label>
                                <div className='control'>
                                    <input name='NAME' className='input' type='text' placeholder={edit.USERNAME} onChange={e => handleChange(e)} />
                                </div>
                            </div>
                            <div className='field create-field'>
                                <label className='label'>Nové Heslo</label>
                                <div className='control'>
                                    <input name='PASSWORD' className='input' type='text' placeholder={'Nové heslo'} onChange={e => handleChange(e)} />
                                </div>
                            </div>
                        </form>
                        {
                            status == 'success' ? <p className='has-text-success'>Uživatel byl úspěšně upraven, přesměrování bude za 3 sekundy</p> : status == 'error' ? <p className='has-text-danger'>Nezdařila se úprava uživatele</p> : null
                        }
                        <button className='button crud float-right' disabled={status == 'success' ? true : false}>{`Upravit ${edit.USERNAME}`}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;