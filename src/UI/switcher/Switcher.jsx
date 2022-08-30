import React from 'react';
import cl from "./switcher.module.css"
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import classes from "classnames";

const Switcher = ({theme, setTheme}) => {
    return (
        <div className={cl.switcher}>
            <div className={theme ? classes(cl.LightRound, cl.darkTheme, "light") : classes(cl.DarkRound, "dark")}>
                <div className={cl.moon} onClick={() => setTheme(!theme)}>
                    <img src={moon} alt="" draggable={false}/>
                </div>
                <div className={cl.sun} onClick={() => setTheme(!theme)}>
                    <img src={sun} alt="" draggable={false}/>
                </div>
            </div>
        </div>
    );
};

export default Switcher;