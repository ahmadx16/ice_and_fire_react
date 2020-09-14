import React, { useState } from 'react'


const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onUserNameChange = (e) => {
        setUserName(e.target.value)
    }
    const onPasswordChenge = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="container p-3 my-3">

            <form>
                <div class="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={'Enter User Name'}
                        value={userName}
                        onChange={onUserNameChange}
                    />
                </div>
                <div class="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder={'Enter Password'}
                        value={password}
                        onChange={onPasswordChenge}
                    />
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
