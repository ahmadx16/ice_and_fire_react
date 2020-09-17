import React from 'react';


const CenteredText = (props) => {

    return (
        <div className="d-flex justify-content-center">
            {props.text}
        </div>
    );
}

export default CenteredText;
