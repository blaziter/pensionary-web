import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ModalProps {
    className: string;
    user: {
        ID: number;
        USERID: string;
        NAME: string;
    }
}

const UserModal = ({ className, user }: ModalProps) => {

    const handleDelete = () => {
        axios.defaults.withCredentials = true;
        axios.delete(`${import.meta.env.VITE_API_URL}/user/${user.USERID}`)
            .then(res => console.log(res))
    }

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div className={`modal ${className}`}>
            <div className='modal-background'></div>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title'>Opravdu chcete smazat {user.NAME}?</p>
                    <button className='delete' aria-label='close'></button>
                </header>
                <footer className='modal-card-foot admin-modal'>
                    <button className='button is-success' onClick={handleDelete}>Smazat</button>
                    <button className='button is-danger'>Cancel</button>
                </footer>
            </div>
        </div>
        </React.Suspense>
    )
}

export default UserModal;