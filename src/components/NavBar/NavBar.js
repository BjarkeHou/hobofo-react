import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        const { } = this.state;

        return (
            <ul className="navbar">
                <li className="navbar_li"><a className="navbar_a" href="#home">Home</a></li>
                <li className="navbar_li"><a className="navbar_a" href="#players">Players</a></li>
                <li className="navbar_li"><a className="navbar_a" href="#custom-match">Custom Match</a></li>
                <li className="navbar_li"><a className="navbar_a" href="#matches">Matches</a></li>
            </ul>
        );
    }
}

export default NavBar;