import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../Menu';
import Nav from '../Nav';

const Update = () => {
    const { id } = useParams();
    const [edit, setEdit] = useState({
        USERID: '',
        USERNAME: '',
        PASSWORD: ''
    });

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
                const data = await res.data;
                console.log(data)
            })
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
                        <button className='button crud float-right'>{`Upravit ${edit.USERNAME}`}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;