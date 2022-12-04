import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu";
import Nav from "../Nav";

const Create = () => {
    const navigate = useNavigate();

    return (
        <>
            <Nav />
            <div className='section admin-layout'>
                <div className='columns'>
                    <div className='column is-2'>
                        <Menu />
                    </div>
                    <div className='column is-10'>
                        <h1>CREATE</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Create;