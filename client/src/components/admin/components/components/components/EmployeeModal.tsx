import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

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
    },
    onClick: () => void;
}

const EmployeeModal = ({ className, employee, onClick }: ModalProps) => {
    const [close, setClose] = useState(false);

    const handleDelete = () => {
        axios.defaults.withCredentials = true;
        axios.delete(`${import.meta.env.VITE_API_URL}/employee/${employee.EMPLOYEEID}`)
            .then(res => {
                if (res.status == 200) {
                    setClose(true);
                    window.location.reload();
                }
                return setClose(false)
            })
    }

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {close && <Navigate to='/admin/employees' replace />}
            <div className={`modal ${className}`}>
            <div className='modal-background'></div>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title'>Opravdu chcete smazat {employee.NAME}?</p>
                    <button className='delete' aria-label='close'></button>
                </header>
                <footer className='modal-card-foot admin-modal'>
                    <button className='button is-success' onClick={handleDelete}>Smazat</button>
                    <button className='button is-danger' onClick={onClick}>Cancel</button>
                </footer>
            </div>
        </div>
        </React.Suspense>
    )
}

export default EmployeeModal;