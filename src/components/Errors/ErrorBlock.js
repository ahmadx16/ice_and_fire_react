import React from 'react';


const ErrorBlock = (props) => {

    return (
        <span className="text-danger">
           {props.errorMessage}
        </span>
    );
}

export default ErrorBlock;
