import React from "react";
import ReactDOM from "react-dom";

const  {TreeView}  = require("qyj-react-components") ;

import App from "./App";
import CesiumViewer from "./CesiumViewer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Game from "./game/Game";
import Clock from "./Clock";

const dataSource = [
    {
        text: '1',
        children: [
            {
                text: '1-i'
            },
            {
                text: '1-2',
                children: [{text: '1-2-1'}, {text: '1-2-2'}]
            },
            {
                text: '1-3'
            },
            {
                text: '1-4'
            }
        ]
    }
];
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="game" element={<Game/>}></Route>
                <Route path="cesium" element={<CesiumViewer/>}></Route>
                <Route path="clock" element={<Clock/>}></Route>
                <Route path="tree" element={<TreeView dataSource={dataSource}/>}></Route>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
    , document.getElementById("root"));

