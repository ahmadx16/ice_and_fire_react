import React from 'react';


const ThemedButton = ({ theme, buttonTheme, iconClass, themeButtonClick, text }) => {

    return (
        <button className={`btn btn${theme === buttonTheme ? "" : "-outline"}-${buttonTheme} mx-2`} onClick={themeButtonClick}>
            {iconClass && (<i className={iconClass}></i>)}
            <span> {text}</span>
        </button>
    );
}

export default ThemedButton;
