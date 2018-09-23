import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header.js';
import NavBar from './components/NavBar/NavBar.js';
import PlayerList from './components/PlayerList/PlayerList.js';

class App extends Component {
    render() {
        return (
            <div className = "App" >
                <Header />
                <NavBar />
                <PlayerList / >
            </div>
        );
    }
}

export default App;