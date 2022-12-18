import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EmployeeModal from "./components/EmployeeModal";

interface Table {
    role: any;
    page: any;
}

interface Employee {
    ID: number,
    EMPLOYEEID: string,
    PREFIX: string,
    SUFFIX: string,
    NAME: string,
    ROLE: string,
    AVAILABILITY: number,
    WORKPLACE: string,
    SHIFT: string,
}

const InfoTable = ({ role, page }: Table) => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [deleteEmployee, setDeleteEmployee] = useState<Employee>({} as Employee);
    const [modal, setModal] = useState(false);
    const [redir, setRedir] = useState(false);
    const [maxLength, setMaxLength] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/all`)
            .then(res => setEmployees(res.data))
    }, [])

    return (
        <>
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <div className='table-container'>
                            <div>
                                <Link to={`/admin/create-team-member`} className='no-deco'>
                                    <button className='button add-employee float-right'>Přidat člena týmu</button>
                                </Link>
                            </div>
                            <table className='table admin-table'>
                                <thead>
                                    <tr>
                                        <th>Akademický titul</th>
                                        <th>Neakademický titul</th>
                                        <th>Jméno a příjmení</th>
                                        <th>Role</th>
                                        <th>Správa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.filter(employee => employee.ROLE != 'doctor' && employee.ROLE != 'nurse' && employee.ROLE != 'chairman' && employee.ROLE != 'vice chairman' && employee.ROLE != 'head nurse' && employee.ROLE != 'social worker').map(employee => {
                                            return (
                                                <tr key={employee.EMPLOYEEID}>
                                                    <td><p className='admin-value'>{employee.PREFIX}</p></td>
                                                    <td><p className='admin-value'>{employee.SUFFIX}</p></td>
                                                    <td><p className='admin-value'>{employee.NAME}</p></td>
                                                    <td><p className='admin-value'>{employee.ROLE}</p></td>
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
                        parseInt(page) != 1 ? <a className='pagination-previous table-pagination-previous' onClick={e => navigate(`/table/${role}/page/` + (parseInt(page) - 1))}>Previous</a> : <></>
                    }
                    {
                        parseInt(page) != maxLength && maxLength > 1 ? <a className='pagination-next table-pagination-next' onClick={e => navigate(`/table/${role}/page/` + (parseInt(page) + 1))}>Next page</a> : <></>
                    }
                    <ul className='pagination-list table-pagination-list'>
                        {
                            parseInt(page) > 1 &&
                            <li>
                                <p className='pagination-link' aria-label='Goto page 1' onClick={e => navigate(`/table/${role}/page/` + 1)}>1</p>
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
                                        <p className='pagination-link' aria-label={`Goto page ` + (parseInt(page) - 1)} onClick={e => navigate(`/table/${role}/page/` + (parseInt(page) - 1))}>{parseInt(page) - 1}</p>
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
                                        <p className='pagination-link' aria-label={`Goto page ` + (parseInt(page) + 1)} onClick={e => navigate(`/table/${role}/page/` + (parseInt(page) + 1))}>{parseInt(page) + 1}</p>
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
                                <p className='pagination-link' aria-label={`Goto page ` + maxLength} onClick={e => navigate(`/table/${role}/page/${maxLength}`)}>{maxLength}</p>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
            {
                modal ? <EmployeeModal className={modal ? 'is-active' : ''} employee={deleteEmployee} onClick={() => { setModal(false) }} /> : null
            }
        </>
    )
}

export default InfoTable