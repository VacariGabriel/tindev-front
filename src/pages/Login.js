import React, { useState } from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

import api from '../services/api';


function Login({history}) {
    const [username, setUserName] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username
        });

        const { _id } = response.data;

        history.push(`/dev/${ _id }`);
    }


    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Logo Tindev" />
                <input 
                    placeholder="Github" 
                    value={username}
                    onChange={ e => setUserName(e.target.value) }
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    ); 
}

export default Login;