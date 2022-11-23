import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImStatsBars } from "react-icons/im";
import { GrUserAdmin } from "react-icons/gr";
import { BiPlusMedical } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { MdElderly } from "react-icons/md";

const Menu = () => {

    return (
        <>
            <aside className="menu user-select-none">
                <p className="menu-label">
                    Obecné
                </p>
                <ul className="menu-list">
                    <li><NavLink className='menu-item' to='/admin'><ImStatsBars /> Přehled</NavLink></li>
                </ul>
                <p className="menu-label">
                    Správa
                </p>
                <ul className="menu-list">
                    <li><NavLink className='menu-item' to='/admin/admin'><GrUserAdmin /> Správci</NavLink></li>
                    <li>
                        <a className='menu-disabled'>Lékařský tým</a>
                        <ul>
                            <li><NavLink className='menu-item' to='/admin/doctor'><BiPlusMedical /> Lékaři</NavLink></li>
                            <li><NavLink className='menu-item' to='/admin/nurse'><GiMedicines /> Sestřičky</NavLink></li>
                            <li><NavLink className='menu-item' to='/admin/resident'><MdElderly /> Důchodci</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </aside>

        </>
    );
}

export default Menu;