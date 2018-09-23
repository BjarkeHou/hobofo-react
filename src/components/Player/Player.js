import React, { Component } from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // error: null,
            // isLoaded: false,
            player: props.player
        };
    }

    componentDidMount() {
        // fetch("http://localhost:8080/players/"+player_id)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 player: result
        //             });
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }

    render() {
        // const { error, isLoaded, player } = this.state;
        const { player } = this.state;
        return (
            <span>{player.name} ({player.elo})</span>
        );
    }
}

export default Player;