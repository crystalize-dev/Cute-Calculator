import Window from "./UI/window/window";
import "./app.css"
import {useState} from "react";

function App() {
    const [mainTheme, setMainTheme] = useState(true)

    return (
        <div className={mainTheme ? "body light" : "body dark"}>
            <h1>Cute Calculator!</h1>
            {!mainTheme &&
                <div className="neonLight"/>
            }
            <Window mainTheme={mainTheme} setMainTheme={setMainTheme}/>
        </div>
    );
}

export default App;
