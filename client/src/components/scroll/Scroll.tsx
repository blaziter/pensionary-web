import React, { MouseEvent, MouseEventHandler } from 'react';

interface IScroll {
    title: string;
    className: string;
    click(e: MouseEvent<HTMLButtonElement>): void
}

const Scroll = ({ title, className, click }: IScroll) => {
    return(
        <>
            <button className={`button ${className}`} onClick={click}>
                {title}
            </button>
        </>
    );
}

export default Scroll;