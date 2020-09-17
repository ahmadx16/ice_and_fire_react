import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'

import ThemeOptions from './ThemeOptions';
import loginAction from '../../actions/loginActions';
import ThemeContext from '../../contexts/themeContext';
import ErrorBlock from '../Errors/ErrorBlock';
import LoginForm from './LoginForm'

const Login = (props) => {


    const [token, setToken] = useState(localStorage.getItem('token'));
    const [error, setError] = useState("");

    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme

    const handleLoginSubmit = async (userName, password, e) => {
        e.preventDefault();
        const loginResponse = await loginAction(userName, password);
        if (!loginResponse.token) {
            setError(loginResponse.error);
        } else {
            localStorage.setItem('token', loginResponse.token);
            setToken(loginResponse.token);
        }
    }

    return (
        <div className="container p-3 my-5">

            {/* Redirect if already logged in */}
            { token && (<Redirect to="/dashboard" />)}

            <div className="d-flex justify-content-center">
                <h1 className={`text-${theme} display-3`}> Ice and Fire </h1>
            </div>

            <ErrorBlock errorMessage={error} />
            <LoginForm onSubmit={handleLoginSubmit} />
            <ThemeOptions />
        </div>
    );
}

export default Login;
