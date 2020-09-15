import React, { useState, useEffect } from 'react';

import { ICE } from '../../themes/colorThemes';

const Dashboard = (props) => {

    const [token, setToken] = useState("");
    console.log(props)

    useEffect(() => {

        // Getting token sent from login screen
        if (props.location.state) {
            setToken(props.location.state.token);
        }
    }, [props.location.state]);
    const [theme, setTheme] = useState(ICE);


    return (
        <div className="container p-3 my-5">
            <div className="d-flex justify-content-center">
                <h1 className={`text-${theme} display-3`}>Welcome!  </h1>
            </div>

            <div className="d-flex justify-content-center">
                <h3 >Your login token is  </h3>
            </div>

            <div className="d-flex justify-content-center">
                <h3 >{token} </h3>
            </div>

            Use this token on header while making requests to backend. For more Information about backend visit
            <a href="https://github.com/ahmadx16/IceAndFire_Django/tree/authentication" target="_blank"> backend</a>

        </div>
    );
}

export default Dashboard;
