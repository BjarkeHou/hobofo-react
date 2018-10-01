import React from 'react';
import './PlayerDetails.css';

import Match from '../Match/Match.js';

class PlayerDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player_id: props.match.params.id,
            isLoaded: false,
            matchesLoaded: false
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/players/"+this.state.player_id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        player: result
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
            );

        fetch("http://localhost:8080/matches/player/"+this.state.player_id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        matchesLoaded: true,
                        matches: result
                    });
                },
                (error) => {
                    this.setState({
                        matchesLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, matchesLoaded, player, matches } = this.state;
        // const { team } = this.state;
        if (error) {
            return <div> Error: { error.message } </div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else {
            if (!matchesLoaded) {
                /*
`id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `active_membership` tinyint(1) NOT NULL DEFAULT 0,
  `last_paid_membership` datetime DEFAULT NULL,
  `rating` int(11) NOT NULL DEFAULT 0,
  `elo` int(11) NOT NULL DEFAULT 1150,
  `receive_sms` tinyint(1) NOT NULL DEFAULT 1,
                */
                return (
                    <div>
                        <div className="playerdetails">
                            <h1>{player.name} ({player.elo})</h1>
                            <dl>
                                <dt>Phone</dt>
                                <dd>{player.phone}</dd>
                                <dt>Active Member</dt>
                                <dd>{player.active_membership}</dd>
                                <dt>Last Paid</dt>
                                <dd>{player.last_paid_membership}</dd>
                                <dt>Rating</dt>
                                <dd>{player.rating}</dd>
                                <dt>Elo</dt>
                                <dd>{player.elo}</dd>
                            </dl>
                        </div>
                        <div>
                            <h2>Matches</h2>
                            <span>Loading...</span>
                        </div>
                    </div>);
            } else {
                return (
                    <div>
                        <div className="playerdetails">
                            <h1>{player.name} ({player.elo})</h1>
                            <dl>
                                <dt>Phone</dt>
                                <dd>{player.phone}</dd>
                                <dt>Active Member</dt>
                                <dd>{player.active_membership}</dd>
                                <dt>Last Paid</dt>
                                <dd>{player.last_paid_membership}</dd>
                                <dt>Rating</dt>
                                <dd>{player.rating}</dd>
                                <dt>Elo</dt>
                                <dd>{player.elo}</dd>
                            </dl>
                        </div>
                        <div>
                            <h2>Matches</h2>
                            <ul className="playerdetails_matchlist"> {matches.map(match => (
                                <li key={match.id} className="playerdetails_matchlist_li"> <Match match={match} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>);
            }
        }
    }
}

export default PlayerDetails;