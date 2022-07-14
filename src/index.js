import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";



function Index() {
    return(
        <div className="app">
            <div className="app_el1">
            </div>
            <div className="app_el2">
            </div>
            <div className="app_el3">
            </div>
            <div className="app_el4">
            </div>
            <div className="app_el5">
            </div>
            <App />
        </div>
    )
}
ReactDOM.render(
    <Index />,
    document.getElementById('root')
)
