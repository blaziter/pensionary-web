import React, { useState } from "react";

const Tile = () => {

    return (
        <>
            <div className="tile is-parent">
                <article className='tile is-child box notification tile-max-width'>
                    <p className='title'>q</p>
                    <p className='subtitle'>q</p>
                </article>
            </div>
        </>
    );
}

/*
            <div className='tile is-parent'>
                <div className="tile">
                    <p className='title'></p>
                    <p className='subtitle'></p>
                </div>
            </div>
*/

export default Tile;