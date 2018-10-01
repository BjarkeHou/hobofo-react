import React from 'react';
import './NavBar.css'

const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar_li"><a className="navbar_a" href="/">Home</a></li>
            <li className="navbar_li"><a className="navbar_a" href="/players">Players</a></li>
            <li className="navbar_li"><a className="navbar_a" href="/custom-match">Custom Match</a></li>
            <li className="navbar_li"><a className="navbar_a" href="/matches">Matches</a></li>
        </ul>
    );
}

export default NavBar;