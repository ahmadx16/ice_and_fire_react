import React, { useContext } from 'react';

import { ICE, FIRE } from '../../themes/colorThemes';
import ThemeContext from '../../contexts/themeContext';
import CenteredText from '../Texts/CenteredText';
import ThemedButton from '../Buttons/ThemedButton';

const ThemeOptions = () => {
    // Theme option button, Ice or Fire

    const { theme, updateTheme } = useContext(ThemeContext);

    const setThemetoIce = () => {
        updateTheme(ICE);
    }
    const setThemetoFire = () => {
        updateTheme(FIRE);
    }

    return (

        <div>
            <div className="mt-5">
                <CenteredText text={<h2 className={`text-${theme}`}>Choose your weapon</h2>} />
            </div>

            <div className="d-flex justify-content-center mt-2">
                <ThemedButton theme={theme} buttonTheme={ICE} iconClass="fa fa-snowflake-o" themeButtonClick={setThemetoIce} text="Use Ice" />
                <ThemedButton theme={theme} buttonTheme={FIRE} iconClass="fa fa-fire" themeButtonClick={setThemetoFire} text="Use Fire" />
            </div>
        </div>
    );
}

export default ThemeOptions;
