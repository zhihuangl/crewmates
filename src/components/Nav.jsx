import React from "react";

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <div className="links">
                 <li> 
                    <Link to="/">Home</Link>
                </li>
               <li>
                    <Link to="/create">Create</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <img src="./src/media/ventGif.png"></img>
            </div>
        </div>
    );
};

export default Nav;