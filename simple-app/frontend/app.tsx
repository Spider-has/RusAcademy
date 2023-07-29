import React from 'react'
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./test.scss"


function Application(){
    return(
        <div className='block'>
            <span>1</span>
            <button>Костя эта хуйня как-то работает, я в ахуе</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#application') as HTMLElement)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/home" index element = { <Application/> } />
        </Routes>
    </BrowserRouter>
)