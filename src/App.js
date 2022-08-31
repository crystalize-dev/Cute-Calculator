import Window from "./UI/window/window";
import {ThemeContext} from "./Context/Context"
import {useState} from "react";
import "./app.css"

function App() {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((curr) => curr === 'light' ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
                <div className="body">
                    <Window/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
