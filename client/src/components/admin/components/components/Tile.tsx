import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string,
    subtitle: number,
    onClick? : React.MouseEventHandler
}

const Tile = ({title, subtitle, onClick}: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admin/doctors');
    }

    return (
        <>
            <div onClick={onClick} className="tile is-parent dashboard-tile user-select-none">
                <article className='tile is-child box notification tile-max-width dashboard-tile-child'>
                    <p className='title'>{title}</p>
                    <p className='subtitle'>{subtitle}</p>
                </article>
            </div>
        </>
    );
}

export default Tile;