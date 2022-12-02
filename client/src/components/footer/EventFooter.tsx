import React from 'react';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const EventFooter = () => {
    return (
        <>
            <article className='event-footer message is-success'>
                <div className='message-body'>
                    <div className='switch-routes'>Pro zobrazení informací klikněte na tlačítko <Link to='/info'><BsFillInfoCircleFill size='96px' /></Link></div>
                    <div className='switch-routes'>Pro zobrazení seznamu sestřiček klikněte na tlačítko <Link to='/status'><BsFillInfoCircleFill size='96px' /></Link></div>
                    <p>Vývojáři: <a href='https://github.com/blaziter'>Petr Tran</a> <a href='https://github.com/bouchlavarna'>Štefan Jambrich</a></p>
                </div>
            </article>
        </>
    );
};

export default EventFooter;