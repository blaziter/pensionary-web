import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import Nav from '../Nav';

const Update = () => {

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/employee/`)
        axios.get(`${import.meta.env.VITE_API_URL}/employee/1`)
            .then(res => {
                console.log(res);
            })
    })

    return (
        <>
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <form className='update-container'>
                            <div className='field update-field'>
                                <label className='label'>Jméno</label>
                                <div className='control'>
                                    <input className='input' type='text' placeholder='Jméno' />
                                </div>
                            </div>
                        </form>
                        <button className='button crud float-right'>{'Upravit { jmeno }'}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;