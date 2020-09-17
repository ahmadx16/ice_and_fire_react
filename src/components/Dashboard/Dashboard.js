import React, { useContext } from 'react';

import ThemeContext from '../../contexts/themeContext'
import Logout from '../Logout/Logout'

const Dashboard = (props) => {

    var token = "You are not logined yet. Please login to get token";
    if (localStorage.getItem('token')) {
        token = localStorage.getItem('token');
    }

    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;

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



            {/* Logout Button */}
            <div >
                <Logout />
            </div>

        </div>
    );
}

export default Dashboard;
