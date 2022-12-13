import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ImStatsBars } from "react-icons/im";
import { GrUserAdmin } from "react-icons/gr";
import { BiPlusMedical } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { MdSupervisedUserCircle } from "react-icons/md";
import { BsFillCalendarEventFill } from "react-icons/bs";
import axios from "axios";

const Menu = () => {
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
                    <li><NavLink className='menu-item' to='/table/admin'><GrUserAdmin /> Správci</NavLink></li>
                    <li>
                        <a className='menu-disabled'>Lékařský tým</a>
                        <ul>
                            <li><NavLink className='menu-item' to='/table/administration'><MdSupervisedUserCircle /> Vedení</NavLink></li>
                            <li><NavLink className='menu-item' to='/table/doctor'><BiPlusMedical /> Lékaři</NavLink></li>
                            <li><NavLink className='menu-item' to='/table/nurse'><GiMedicines /> Sestřičky</NavLink></li>
                            <li><NavLink className='menu-item' to='/table/announcements'><BsFillCalendarEventFill /> Události</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </aside>

        </>
    );
}

export default Menu;