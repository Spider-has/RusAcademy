import * as ReactDOM from  "react-dom/client"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage} from "./home/home";
import React from "react";

export function Application(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" index element = { <HomePage/> } />
            </Routes>
        </BrowserRouter>
    )
}
