import React from "react";
import "./App.css";
import {Link, Route, Outlet} from "react-router-dom";
import CesiumViewer from "./CesiumViewer";
import Clock from "./Clock";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, React! </h1>
                <ul>
                    <li>
                        <Link to="clock">clock</Link>
                    </li>
                    <li>
                        <Link to="cesium">cesium</Link>
                    </li>
                    <li>
                        <Link to="game3">game</Link>
                    </li>
                    <li>
                        <Link to="tree">tree</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        );
    }
}

export default App;