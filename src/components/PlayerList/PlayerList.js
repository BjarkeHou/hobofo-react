import React, { Component } from 'react';
import './PlayerList.css';

import Player from '../Player/Player.js';


class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            players: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/players")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        players: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, players } = this.state;
        if (error) {
            return <div> Error: { error.message } </div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else {
            return (
                <ul className="playerlist"> {players.map(player => (
                    <li className="playerlist_li" key = { player.name } > <Player player={player} /></li>
                    ))}
                </ul>
            );
        }
    }
}

export default PlayerList;