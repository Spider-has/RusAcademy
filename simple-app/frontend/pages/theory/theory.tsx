import React from 'react';
import { UserPanel } from '../../components/UserPanel/UserPanel';
import { SingleBlockList, TheoryContentBlock } from "../../components/TheoryBlock/TheoryBlock"
import "./theory.scss"

const MainArea = () => {
    return (
        <main className="main-theory-area">
            <div className="main-theory-area__wrapper">
                <section className="main-theory-area__section">
                    <h2 className="main-theory-area__section-title">Теория</h2>
                    <SingleBlockList/>
                </section>
                <section className='main-theory-area__theory-block-section'>   
                    <TheoryContentBlock/>
                </section>
            </div>
        </main>
    )
}

const TheoryPage = () => {
    return (
        <div className="theory-page">
            <UserPanel/>
            <MainArea/>
        </div>
    )
}

export {TheoryPage}