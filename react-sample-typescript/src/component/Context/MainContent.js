import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

const MainContent = (props)=>{

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div
            style={{
                width:'100vm',
                height:'100vh',
                padding:'1.5rem',
                backgroundColor: theme == 'light'? "violet" : "green",
                color : theme == "light"?"black":"white",

            }}
        >
        <p>안녕하세요 테마 변경이 가능한 사이트입니다.  </p>
            <button onClick={toggleTheme}>테마 변경</button>

        </div>
    )
}

export default MainContent;