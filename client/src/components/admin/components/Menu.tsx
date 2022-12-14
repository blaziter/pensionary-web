import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { ImStatsBars } from "react-icons/im";
import { GrUserAdmin } from "react-icons/gr";
import { BiPlusMedical } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { MdSupervisedUserCircle } from "react-icons/md";
import { BsFillCalendarEventFill } from "react-icons/bs";

const Menu = () => {
    const { role } = useParams();

    return (
        <>
            <aside className="menu user-select-none">
                <p className="menu-label">
                    Obecné
                </p>
                <ul className="menu-list">
                    <li><NavLink className='menu-item' to='/admin/dashboard'><ImStatsBars /> Přehled</NavLink></li>
                </ul>
                <p className="menu-label">
                    Správa
                </p>
                <ul className="menu-list">
                    <li><Link className={role == 'admin' ? 'menu-item active' : 'menu-item'} to='/table/admin/page/1'><GrUserAdmin /> Správci</Link></li>
                    <li>
                        <a className='menu-disabled'>Lékařský tým</a>
                        <ul>
                            <li><Link className={role == 'administration' ? 'menu-item active' : 'menu-item'} to='/table/administration/page/1'><MdSupervisedUserCircle /> Vedení</Link></li>
                            <li><Link className={role == 'doctor' ? 'menu-item active' : 'menu-item'} to='/table/doctor/page/1'><BiPlusMedical /> Lékaři</Link></li>
                            <li><Link className={role == 'nurse' ? 'menu-item active' : 'menu-item'} to='/table/nurse/page/1'><GiMedicines /> Sestřičky</Link></li>
                            <li><Link className={role == 'announcements' ? 'menu-item active' : 'menu-item'} to='/table/announcements/page/1'><BsFillCalendarEventFill /> Události</Link></li>
                        </ul>
                    </li>
                </ul>
            </aside>

        </>
    );
}

export default Menu;