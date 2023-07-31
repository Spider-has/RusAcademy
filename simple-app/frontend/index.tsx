import './index.scss'

import React from 'react'
import ReactDOM from  "react-dom/client"
import {Application} from "./pages/app";

const root = ReactDOM.createRoot(document.querySelector('#application') as HTMLElement)

root.render(
    <Application/>
)