import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import PlayerDetails from '../PlayerDetails/PlayerDetails'
import PlayerList from '../PlayerList/PlayerList'
// import PlayerDetail from '../PlayerDetail/PlayerDetail'
import MatchList from '../MatchList/MatchList'
// import Schedule from './Schedule'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

//<Route exact path='/players/:id' render={(props) => <PlayerDetails {...props} player_id={true} />}/>
const Main = () => (
<main>
	<Switch>

		<Route exact path='/players' component={PlayerList}/>
		<Route exact path='/players/:id' component={PlayerDetails}/>
		<Route path='/matches' component={MatchList}/>
		<Route path='/' component={Home}/>
	</Switch>
</main>
)

export default Main
