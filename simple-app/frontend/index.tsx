import './index.scss'

import React from 'react'
import ReactDOM from  "react-dom/client"
import {Application} from "./pages/app";
import {reatomContext} from "@reatom/npm-react";
import {createCtx} from "@reatom/core"


const ctx = createCtx()

const root = ReactDOM.createRoot(document.querySelector('#application') as HTMLElement)

root.render(
    <reatomContext.Provider value = {ctx}>
        <Application/>
    </reatomContext.Provider>
)