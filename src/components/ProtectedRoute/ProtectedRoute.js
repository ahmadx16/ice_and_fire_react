import React from 'react'
import { Redirect } from 'react-router-dom'


const ProtectedRoute = (props) => {

        const Component = props.component;
        let isAuthenticated = false;

        // Currently authenticating on presence of token
        if(localStorage.getItem('token'))
            isAuthenticated = true;
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '' }} />
        );
    
}

export default ProtectedRoute;
