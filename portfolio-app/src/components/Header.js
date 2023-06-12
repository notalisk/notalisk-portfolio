import '../styles/Header.css';
import React, { useState } from 'react';

let classes = ['here', ';', '', ''];

function Header() {
    const [currentPage, setPage] = useState(0);

    function switchPage(newPage) {
        setPage(newPage);
        classes[currentPage] = '';
        classes[newPage] = 'here';
        return;
    }

    return (
        <div>
            <h1>Ellen Kolbly</h1>
            <nav>
                <ul>
                    <li className={classes[0]} onClick={() => switchPage(0)}>About Me</li>
                    <li className={classes[1]} onClick={() => switchPage(1)}>Portfolio</li>
                    <li className={classes[2]} onClick={() => switchPage(2)}>Resume</li>
                    <li className={classes[3]} onClick={() => switchPage(3)}>Contact</li>
                </ul>
            </nav>
        </div>
    );

}




export default Header;