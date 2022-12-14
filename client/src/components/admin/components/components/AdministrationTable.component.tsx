// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import EmployeeModal from "./components/EmployeeModal";
import { BsCheckLg, BsXLg } from "react-icons/bs";

interface Table {
    role: any;
    page: any;
}

interface Member {
    ID: string;
    EMPLOYEEID: string;
    PREFIX: string;
    SUFFIX: string;
    NAME: string;
    ROLE: string;
    AVAILABILITY: number;
}

const AdministrationTable = ({ role, page }: Table) => {
    const [members, setMembers] = useState<Member[]>([]);
    const [deleteMember, setDeleteMember] = useState<Member>();
    const [modal, setModal] = useState(false);
    const [redir, setRedir] = useState(false);
    const navigate = useNavigate();
    const [maxLength, setMaxLength] = useState(0);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/employee/all`)
            .then(async res => {
                setMembers(await res.data)
            })
        return
    }, []);



    useEffect(() => {
        if (page < 1 || page == undefined) return setRedir(true);
        setRedir(false)
        setMaxLength(Math.ceil(members.length / 10));
        return
    })

    useEffect(() => {
        if (page < 1 || page == undefined) return setRedir(true);
        setRedir(false)
        setMaxLength(Math.ceil(members.length / 10));
        return
    }, [])

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
                        <div className="table-container">
                            <div>
                                <Link to={`/admin/create-member`} className='no-deco'>
                                    <button className='button add-employee float-right'>Přidat člena vedení</button>
                                </Link>
                            </div>
                            <table className="table admin-table">
                                <thead>
                                    <tr>
                                        <th><p className='admin-value'>Akademický titul</p></th>
                                        <th><p className='admin-value'>Neakademický titul</p></th>
                                        <th><p className='admin-value'>Jméno a příjmení</p></th>
                                        <th><p className='admin-value'>Role</p></th>
                                        <th><p className='admin-value'>Dostupnost</p></th>
                                        <th><p className='admin-value'>Správa</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        members.filter(member => member.ROLE != 'doctor' && member.ROLE != 'nurse').slice(10 * (page - 1), 10 * page).map((member) => {
                                            return (
                                                <tr key={member.EMPLOYEEID}>
                                                    <td><p className='admin-value'>{member.PREFIX}</p></td>
                                                    <td><p className='admin-value'>{member.SUFFIX}</p></td>
                                                    <td><p className='admin-value'>{member.NAME}</p></td>
                                                    <td><p className='admin-value'>{member.ROLE == 'chairman' ? 'Ředitel/ka' : member.ROLE == 'vice chairman' ? 'Zástupce ředitele' : member.ROLE == 'head nurse' ? 'Vedoucí sestra' : member.ROLE == 'social worker' ? 'Sociální pracovník' : null}</p></td>
                                                    <td><p className='admin-value'>{member.AVAILABILITY == 1 ? <BsCheckLg /> : <BsXLg />}</p></td>
                                                    <td>
                                                        <Link to={`edit/${member.EMPLOYEEID}`}><button className='button admin-edit'><AiFillEdit /></button></Link>
                                                        <button className='button admin-edit' onClick={() => {
                                                            setDeleteMember(member);
                                                            setModal(true)
                                                        }
                                                        }><AiFillDelete /></button>
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
                modal ? <EmployeeModal className={modal ? 'is-active' : ''} employee={deleteMember} setModal={e => setModal(false)} /> : <></>
            }
        </>
    );
}

export default AdministrationTable;