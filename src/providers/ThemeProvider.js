import React, {useEffect, useState} from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import {getTheme} from "../helper/getTheme";

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(getTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [ theme ])

    return (
        <div>
            <ThemeContext.Provider value={{theme, setTheme}}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;
