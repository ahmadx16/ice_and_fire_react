import React from 'react';

import { ICE, FIRE } from '../../themes/colorThemes';

const ThemeOptions = ({ theme, setThemetoIce, setThemetoFire }) => {
    // Theme option button, Ice or Fire

    return (

        <div>
            <div className="d-flex justify-content-center mt-5">
                <h2 className={`text-${theme}`}>Choose your weapon</h2>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <button className={`btn btn${theme === ICE ? "" : "-outline"}-ice mx-2`} onClick={setThemetoIce}>
                    <i className="fa fa-snowflake-o"></i>
                    <span> Use Ice</span>
                </button>

                <button className={`btn btn${theme === FIRE ? "" : "-outline"}-fire mx-2`} onClick={setThemetoFire}>
                    <i className="fa fa-fire"></i>
                    <span> Use Fire</span>
                </button>
            </div>
        </div>
    );
}

export default ThemeOptions;
