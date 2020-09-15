import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

import { ICE, FIRE } from '../../themes/colorThemes';
import ThemeOptions from './ThemeOptions';
import loginAction from '../../actions/loginActions';


const Login = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginInfo, setLoginInfo] = useState({
        isLoggedIn: false,
        token: "",
    });

    const [theme, setTheme] = useState(ICE);


    const onUserNameChange = (e) => {
        setUserName(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const setThemetoIce = () => {
        setTheme(ICE)
    }
    const setThemetoFire = () => {
        setTheme(FIRE)
    }
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const token = await loginAction(userName, password);
        setLoginInfo({
            isLoggedIn: true,
            token: token,
        });
    }

    return (

        <div className="container p-3 my-5">

            {/* Redirect if already logged in */}
            { loginInfo.isLoggedIn ? (<Redirect to={{
                pathname: "/dashboard",
                state: { token: loginInfo.token }
            }} token={loginInfo.token} />) : null}


            <div className="d-flex justify-content-center">
                <h1 className={`text-${theme} display-3`}> Ice and Fire </h1>
            </div>

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

            <ThemeOptions theme={theme} setThemetoIce={setThemetoIce} setThemetoFire={setThemetoFire} />
        </div>
    );
}

export default Login;
