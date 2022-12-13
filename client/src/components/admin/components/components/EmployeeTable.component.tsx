// @ts-nocheck
import React, { Suspense } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import EmployeeModal from './components/EmployeeModal';

const EmployeeTable = () => {
    const { role, page } = useParams();
    const [employees, setEmployees] = useState(['ahoj']);
    const [modal, setModal] = useState(false);
    const [deleteEmployee, setDeleteEmployee] = useState({});
    const [redir, setRedir] = useState(false);
    const navigate = useNavigate();
    const [maxLength, setMaxLength] = useState(0);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/all`)
            .then(res => setEmployees(res.data))
    }, []);

    useEffect(() => {
        if (page < 1 || page == undefined) return setRedir(true);
        setRedir(false)
        let length = Math.ceil(employees.length / 10);
        setMaxLength(length);
        console.log(maxLength)
    }, [role])

    return (
        <>
            {redir && <Navigate to='page/1' replace />}
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <div className='table-container'>
                            <div>
                                <Link to={`/admin/create`} className='no-deco'>
                                    <button className='button add-employee float-right'>Přidat uživatele</button>
                                </Link>
                            </div>
                            <table className='table admin-table'>
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
                <nav className='pagination table-pagination' role='navigation' aria-label='pagination'>
                    {
                        parseInt(page) != 1 ? <a className='pagination-previous table-pagination-previous' onClick={e => navigate('page/' + (parseInt(page) - 1))}>Previous</a> : <></>
                    }
                    {
                        parseInt(page) != maxLength ? <a className='pagination-next table-pagination-next' onClick={e => navigate('page/' + (parseInt(page) + 1))}>Next page</a> : <></>
                    }
                    <ul className='pagination-list table-pagination-list'>
                        {
                            parseInt(page) > 1 &&
                            <li>
                                <p className='pagination-link' aria-label='Goto page 1'>1</p>
                            </li>
                        }
                        {
                            parseInt(page) > 2 &&
                            <>
                                {
                                    parseInt(page) > 3 &&
                                    <li>
                                        <span className='pagination-ellipsis'>&hellip;</span>
                                    </li>
                                }
                                {
                                    parseInt(page) > 2 &&
                                    <li>
                                        <p className='pagination-link' aria-label={`Goto page ` + (parseInt(page) - 1)}>{parseInt(page) - 1}</p>
                                    </li>
                                }
                            </>
                        }
                        <li>
                            <p className='pagination-link is-current' aria-label={'Page ' + parseInt(page)} aria-current='page'>{page}</p>
                        </li>
                        {
                            parseInt(page) < maxLength &&
                            <>
                                {
                                    parseInt(page) < maxLength - 1 &&
                                    <li>
                                        <p className='pagination-link' aria-label={`Goto page ` + (parseInt(page) + 1)}>{parseInt(page) + 1}</p>
                                    </li>
                                }
                                {
                                    parseInt(page) < maxLength - 2 &&
                                    <li>
                                        <span className='pagination-ellipsis'>&hellip;</span>
                                    </li>
                                }
                            </>
                        }
                        {
                            parseInt(page) < maxLength &&
                            <li>
                                <p className='pagination-link' aria-label={`Goto page ` + maxLength}>{maxLength}</p>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
            {
                modal ? <EmployeeModal className={modal ? 'is-active' : ''} employee={deleteEmployee} onClick={() => { setModal(false) }} /> : null
            }
        </>
    );
}

export default EmployeeTable;