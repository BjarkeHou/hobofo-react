import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main/Main.js';

class App extends React.Component {
    render() {
        return (
            <div className = "App" >
                <Header />
                <NavBar />
                <Main />
            </div>
        );
    }
}

export default App;