import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CesiumViewer from "./CesiumViewer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Game from "./game/Game";
import Clock from "./Clock";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="game" element={<Game  />}></Route>
                <Route path="cesium" element={<CesiumViewer  />}></Route>
                <Route path="clock" element={<Clock  />}></Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
    , document.getElementById("root"));

