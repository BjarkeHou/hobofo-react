import React from 'react';
import './MatchList.css';

import Match from '../Match/Match.js';


class MatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            matches: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/matches")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        matches: result
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
        const { error, isLoaded, matches } = this.state;
        if (error) {
            return <div> Error: { error.message } </div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else {
            return (
                <ul className="matchlist"> {matches.map(match => (
                    <li key={match.id} className="matchlist_li"> <Match match={match} /></li>
                    ))}
                </ul>
            );
        }
    }
}

export default MatchList;