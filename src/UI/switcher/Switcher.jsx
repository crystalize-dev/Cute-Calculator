import React, {useContext} from 'react';
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import {ThemeContext} from "../../Context/Context";
import "./switcher.css"

const Switcher = () => {
    const {toggleTheme} = useContext(ThemeContext)

    return (
        <div className="switcher">
            <div className="round">
                <div className="moon" onClick={toggleTheme}>
                    <img src={moon} alt="" draggable={false}/>
                </div>
                <div className="sun" onClick={toggleTheme}>
                    <img src={sun} alt="" draggable={false}/>
                </div>
            </div>
        </div>
    );
};

export default Switcher;