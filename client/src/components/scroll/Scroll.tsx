import React, { MouseEvent, useEffect } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

interface IScroll {
    title: string;
    className: string;
    click(e: MouseEvent<HTMLButtonElement>): void
}

const Scroll = ({ className, click }: IScroll) => {

    //style={{ display: 'none'}}

    return (
        <>
            {
                className == 'up' ?
                    <button className={`button ${className}`} onClick={click}>
                        <AiFillCaretUp />
                    </button>
                    :
                    <button className={`button ${className}`} id='down' onClick={click} >
                        <AiFillCaretDown size={128} />
                    </button>
            }
        </>
    );
}

export default Scroll;