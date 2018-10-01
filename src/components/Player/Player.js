import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: props.player,
            player_id: props.player_id,
            isLoaded: false
        };
    }

    componentDidMount() {
        if(this.state.player === undefined && this.state.player_id !== undefined) {
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
            )
        } else if(this.state.player) {
            this.setState({isLoaded: true});
        }
    }

    render() {
        const { error, isLoaded, player } = this.state;
        // const { team } = this.state;
        if (error) {
            return <div> Error: { error.message } </div>;
        } else if (!isLoaded) {
            return <div> Loading... </div>;
        } else if (player !== undefined) {
            return (
                <span>{player.name} ({player.elo})</span>
            );
        }
    }
}

export default Player;