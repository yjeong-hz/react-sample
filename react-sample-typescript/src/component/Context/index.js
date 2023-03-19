import React, { useState, useCallback } from "react";
import MainContent from './MainContent'
import { ThemeContext } from "./ThemeContext";

const ContextPractice=()=>{
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(()=>{
        if(theme=='light'){
            setTheme('dark');
        }else if(theme=='dark'){
            setTheme('light');
        }
    },[theme]);

    return <div>
        ContextPractice
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <MainContent/>
        </ThemeContext.Provider>

    </div>
}

export default ContextPractice;