import React from 'react';
import './Match.css';

import Team from '../Team/Team.js';

class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            match: props.match,
            match_id: props.match_id

        };
    }

    componentDidMount() {
        if(this.state.match === undefined && this.state.match_id !== undefined) {
            fetch("http://localhost:8080/matches/"+this.state.match_id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        match: result
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
        } else if(this.state.match) {
            this.setState({isLoaded: true});
        }
    }

    render() {
        const { error, isLoaded, match } = this.state;
        // const { match } = this.state;
        if (error) {
            return <div> Error: { error.message } </div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else if (match !== undefined) {
            if (match.winner_id) {
                if(match.winner_id === match.team1_id) {
                    return (<span><b><Team team_id={match.team1_id} /></b><br/>vs.<br/><Team team_id={match.team2_id} /></span>);
                } else {
                    return (<span><Team team_id={match.team1_id} /><br/>vs.<br/><b><Team team_id={match.team2_id} /></b></span>);
                }
            } else {
                return (<span><Team team_id={match.team1_id} /><br/>vs.<br/><Team team_id={match.team2_id} /></span>);
            }
        }
    }
}

export default Match;