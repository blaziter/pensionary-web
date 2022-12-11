import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../Menu';
import Nav from '../Nav';

const Update = () => {
    const { uuid } = useParams();
    const [edit, setEdit] = useState({
        EMPLOYEEID: '',
        SUFFIX: '',
        PREFIX: '',
        NAME: '',
        ROLE: '',
        AVAILABILITY: 0,
        SHIFT: '',
        WORKPLACE: ''
    });

    useEffect(() => {
        console.log(uuid)
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/?group=EMPLOYEEID&data=${uuid}`, { withCredentials: true })
            .then(async res => {
                const data = await res.data[0];
                setEdit(data)
            })
    }, [])

    const handleChange = (e: any) => {
        setEdit({ ...edit, [e.target.name]: e.target.value })
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
                                <label className='label'>Akademický titul</label>
                                <div className='control'>
                                    <input name='PREFIX' className='input' type='text' placeholder={edit.PREFIX} onChange={e => handleChange(e)} />
                                </div>
                            </div>
                            <div className='field create-field'>
                                <label className='label'>Neakademický titul</label>
                                <div className='control'>
                                    <input name='SUFFIX' className='input' type='text' placeholder={edit.SUFFIX} onChange={e => handleChange(e)} />
                                </div>
                            </div>
                            <div className='field create-field'>
                                <label className='label'>Jméno a příjmení</label>
                                <div className='control'>
                                    <input name='NAME' className='input' type='text' placeholder={edit.NAME} onChange={e => handleChange(e)} />
                                </div>
                            </div>
                            <div className='field create-field'>
                                <label className='label'>Role</label>
                                <div className='control'>
                                    <div className='select'>
                                        <select name='ROLE' onChange={e => handleChange(e)}>
                                            <option value=''>Vybrat roli</option>
                                            <option value='doctor'>Doktor</option>
                                            <option value='nurse'>Sestřička</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='field'>
                                <label className='label'>Dostupnost</label>
                                <div className='control swap-availability'>
                                    <label className='checkbox'>
                                        <input type='checkbox' name='AVAILABILITY' onChange={e => edit.AVAILABILITY == 0 ? setEdit({ ...edit, AVAILABILITY: 1 }) : setEdit({ ...edit, AVAILABILITY: 0 })} />
                                    </label>
                                </div>
                            </div>
                        </form>
                        <button className='button crud float-right'>{`Upravit ${edit.NAME}`}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;