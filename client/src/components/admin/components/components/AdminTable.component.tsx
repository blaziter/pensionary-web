// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserModal from "./components/UserModal";

interface Admin {
    ID: string;
    USERNAME: string;
}

interface Table {
    role: any;
    page: any;
}

interface Admin {
    ID: string;
    USERID: string;
    USERNAME: string;
}

const AdminTable = ({ role, page }: Table) => {
    const [admins, setAdmins] = useState<Admin[]>([]);
    const [modal, setModal] = useState(false);
    const [deleteAdmin, setDeleteAdmin] = useState({});
    const [redir, setRedir] = useState(false);
    const navigate = useNavigate();
    const [maxLength, setMaxLength] = useState(0);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/user/all`)
            .then(async res => setAdmins(await res.data))
        return
    }, []);

    useEffect(() => {
        if (page < 1 || page == undefined) return setRedir(true);
        setRedir(false)
        setMaxLength(Math.ceil(admins.length / 10));
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
                        <div className='table-container'>
                            <div>
                                <Link to={`/admin/create`} className='no-deco'>
                                    <button className='button add-employee float-right'>Přidat uživatele</button>
                                </Link>
                            </div>
                            <table className='table admin-table'>
                                <thead>
                                    <tr>
                                        <th>Uživatelské jméno</th>
                                        <th>Role</th>
                                        <th>Správa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        admins.slice(10 * (page - 1), 10 * page).map(admin => {
                                            return (
                                                <tr key={admin.ID}>
                                                    <td><p className='admin-value'>{admin.USERNAME}</p></td>
                                                    <td><p className='admin-value'>Správce</p></td>
                                                    <td>
                                                        <div className='button-holder'>
                                                            <Link to={`edit/${admin.USERID}`}><button className='button admin-edit'><AiFillEdit /></button></Link>
                                                            <button className='button admin-edit' onClick={() => {
                                                                setDeleteAdmin(admin);
                                                                setModal(true)
                                                            }
                                                            }><AiFillDelete /></button>
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
                modal ? <UserModal className={modal ? 'is-active' : ''} user={deleteAdmin} /> : null
            }
        </>
    );
}

export default AdminTable;