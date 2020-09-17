import React from 'react';
import { useHistory } from 'react-router-dom';


const Logout = (props) => {

    const history = useHistory()
    const onLogoutClick = () => {
        if (!localStorage.getItem('token'))
            return

        localStorage.removeItem('token');
        // Redirecting to login page
        history.push('');

    }

    return (
        <button className="btn btn-dark" onClick={onLogoutClick}>
            <span> Logout</span>
        </button>
    );
}

export default Logout;
