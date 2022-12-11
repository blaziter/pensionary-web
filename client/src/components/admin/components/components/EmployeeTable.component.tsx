// @ts-nocheck
import React, { Suspense } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import EmployeeModal from './components/EmployeeModal';

const EmployeeTable = () => {
    const { role } = useParams();
    const [employees, setEmployees] = useState(['ahoj']);
    const [modal, setModal] = useState(false);
    const [deleteEmployee, setDeleteEmployee] = useState({});

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/all`)
            .then(res => setEmployees(res.data))
    }, []);

    return (
        <>
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <Link to={`/admin/create`} className='no-deco'>
                            <button className='button add-employee float-right'>Přidat zaměstnance</button>
                        </Link>
                        <table className='table'>
                            <thead>
                                <th>Akademický titul</th>
                                <th>Neakademický titul</th>
                                <th>Jméno a příjmení</th>
                                <th>Role</th>
                                <th>Dostupnost</th>
                                <th>Pracoviště</th>
                                <th>Směna</th>
                                <th>Správa</th>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => {
                                        if (employee.ROLE == role) return (
                                            <>
                                                <tr key={employee.EMPLOYEEID}>
                                                    <td><p className='admin-value'>{employee.PREFIX}</p></td>
                                                    <td><p className='admin-value'>{employee.SUFFIX}</p></td>
                                                    <td><p className='admin-value'>{employee.NAME}</p></td>
                                                    <td><p className='admin-value'>{employee.ROLE == 'doctor' ? 'Doktor/ka' : 'Sestra'}</p></td>
                                                    <td><p className='admin-value'>{employee.AVAILABILITY == 1 ? 'Dostupný/á' : 'Nedostupný/á'}</p></td>
                                                    <td><p className='admin-value'>{employee.WORKPLACE}</p></td>
                                                    <td><p className='admin-value'>{employee.SHIFT}</p></td>
                                                    <td>
                                                        <div className='button-holder'>
                                                            <Link to={`edit/${employee.EMPLOYEEID}`}><button className='button admin-edit'><AiFillEdit /></button></Link>
                                                            <button className='button admin-edit' onClick={() => {
                                                                setDeleteEmployee(employee);
                                                                setModal(true)
                                                            }}><AiFillDelete /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                modal ? <EmployeeModal className={modal ? 'is-active' : ''} employee={deleteEmployee} /> : null
            }
        </>
    );
}

export default EmployeeTable;