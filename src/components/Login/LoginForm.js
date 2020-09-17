import React, { useState, useContext } from 'react';

import ThemeContext from '../../contexts/themeContext';

const LoginForm = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme

    const onUserNameChange = (e) => {
        setUserName(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={(e) => props.onSubmit(userName, password, e)}>
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
    );
}

export default LoginForm;
