// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserModal from "./components/UserModal";

interface Admin {
    ID: string;
    USERNAME: string;
}

const AdminTable = () => {
    const [admins, setAdmins] = useState([]);
    const [modal, setModal] = useState(false);
    const [deleteAdmin, setDeleteAdmin] = useState({});

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`${import.meta.env.VITE_API_URL}/user/all`)
            .then(async res => setAdmins(await res.data))
    }, []);

    return (
        <>
            {
                modal ? <Modal title={deleteAdmin.USERNAME} uuid={deleteAdmin.ID} /> : null
            }
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
                                <th>Uživatelské jméno</th>
                                <th>Role</th>
                                <th>Správa</th>
                            </thead>
                            <tbody>
                                {
                                    admins.map(async admin => {
                                        console.log(admin)
                                        return (
                                            <tr key={admin.ID}>
                                                <td><p className='admin-value'>{admin.USERNAME}</p></td>
                                                <td><p className='admin-value'>Správce</p></td>
                                                <td>
                                                    <div className='button-holder'>
                                                        <Link to={`edit/${admin.USERID}`}><button className='button admin-edit'><AiFillEdit /></button></Link>
                                                        <button className='button admin-edit' onClick={() => {
                                                            setDeleteAdmin(employee);
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
            {
                modal ? <UserModal className={modal ? 'is-active' : ''} user={deleteAdmin} /> : null
            }
        </>
    );
}

export default AdminTable;