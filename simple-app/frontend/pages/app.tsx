import * as ReactDOM from  "react-dom/client"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage} from "./home/home";
import React from "react";
import { TheoryPage } from "./theory/theory";

export function Application(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" index element = { <HomePage/> } />
                <Route path = "/theory" index element = { <TheoryPage/> } />
            </Routes>
        </BrowserRouter>
    )
}
