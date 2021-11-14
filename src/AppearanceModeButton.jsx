import React from "react";
import './index.css';

function AppearanceModeButton() {

    function toggleAppearanceMode() {
        if (document.body.className == "theme-light") {
            document.body.className = "theme-dark";
            document.getElementById("appearance-mode-button").innerText = "Light Mode";
        } else {
            document.body.className = "theme-light";
            document.getElementById("appearance-mode-button").innerText = "Dark Mode";
        }
    }

    function updateTitle() {
        if (document.body.className == "theme-light") {
            return "Dark Mode";
        } else {
            return "Light Mode";
        }
    }

    return(
        <button id="appearance-mode-button" type="button" onClick={toggleAppearanceMode}>{updateTitle()}</button>
    )
}

export default AppearanceModeButton;