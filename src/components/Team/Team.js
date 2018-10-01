import React from 'react';

import Player from '../Player/Player.js';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: props.team,
            team_id: props.team_id,
            isLoaded: false
        };
    }

    componentDidMount() {
        if(this.state.team === undefined && this.state.team_id !== undefined) {
            fetch("http://localhost:8080/teams/"+this.state.team_id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        team: result.team
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
        } else if(this.state.team) {
            this.setState({isLoaded: true});
        }
    }

    render() {
        const { error, isLoaded, team } = this.state;
        // const { team } = this.state;
        if (error) {
            return <div> Error: { error.message } </div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else if (team !== undefined) {
            return (
                <span><Player player={team.players[0]} /> & <Player player={team.players[1]} /></span>
            );
        }
    }
}

export default Team;