import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {getUsers} from './services/users-service';
import './styles/default.scss';

const App = () => {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        getUsers().then(setMessage);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div style={{textAlign: 'start'}}>
                <pre>
                    <code>{message}</code>
                </pre>
                </div>
            </header>
        </div>
    );
};

export default App;
