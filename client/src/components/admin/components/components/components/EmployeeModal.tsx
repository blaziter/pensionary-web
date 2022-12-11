import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ModalProps {
    className: string;
    employee: {
        ID: number;
        EMPLOYEEID: string;
        PREFIX: string;
        SUFFIX: string;
        NAME: string;
        ROLE: string;
        AVAILABILITY: number;
        WORKPLACE: string;
        SHIFT: string;
    }
}

const EmployeeModal = ({ className, employee }: ModalProps) => {

    const handleDelete = () => {
        axios.defaults.withCredentials = true;
        axios.delete(`${import.meta.env.VITE_API_URL}/employee/${employee.EMPLOYEEID}`)
            .then(res => console.log(res))
    }

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div className={`modal ${className}`}>
            <div className='modal-background'></div>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title'>Opravdu chcete smazat {employee.NAME}?</p>
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

export default EmployeeModal;