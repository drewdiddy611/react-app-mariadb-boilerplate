import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {getUsers} from './services/users-service';
import './styles/default.scss';
import {Message} from './Message';

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
                    <Message message={message}/>
                </div>
            </header>
        </div>
    );
};

export default App;
