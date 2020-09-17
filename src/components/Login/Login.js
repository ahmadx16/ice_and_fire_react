import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'

import ThemeOptions from './ThemeOptions';
import loginAction from '../../actions/loginActions';
import ThemeContext from '../../contexts/themeContext';
import ErrorBlock from '../Errors/ErrorBlock';

const Login = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [error, setError] = useState(false);

    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme

    const onUserNameChange = (e) => {
        setUserName(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await loginAction(userName, password);
        if (!loginResponse.token) {
            setError(true);
        }
        localStorage.setItem('token', loginResponse.token);
        setToken(loginResponse.token);
    }

    return (
        <div className="container p-3 my-5">

            {/* Redirect if already logged in */}
            { token && (<Redirect to="/dashboard" />)}


            <div className="d-flex justify-content-center">
                <h1 className={`text-${theme} display-3`}> Ice and Fire </h1>
            </div>


            {error && (<ErrorBlock errorMessage="Cannot login with provided credentials" />)}

            <form onSubmit={handleLoginSubmit}>
                <div className="form-group mt-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={'Enter User Name'}
                        value={userName}
                        onChange={onUserNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder={'Enter Password'}
                        value={password}
                        onChange={onPasswordChange}
                        required
                    />
                </div>
                <button type="submit" className={`btn btn-${theme} btn-block`}>Login</button>

            </form>

            <ThemeOptions />
        </div>
    );
}

export default Login;
