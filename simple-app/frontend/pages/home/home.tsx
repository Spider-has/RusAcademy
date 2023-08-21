import './home.scss'

import { Button } from "../../components/Button/Button";
import React from 'react';
import {LeaderTable} from "../../components/leaderTable/leaderTable";
import {GameCardsList} from "../../components/gameCard/gameCard";
import {TheoryTable} from "../../components/TheoryBlock/TheoryBlock";
import { UserPanel } from '../../components/UserPanel/UserPanel';


const MainArea = () => {
    return(
        <main className="main-home-area">
            <div className="main-home-area__wrapper">
            <section className="main-home-area__section">
                <h2 className="main-home-area__section-title">Табилица лидеров</h2>
                <LeaderTable/>
            </section>
            <div className="main-home-area__activity-area">
            <section className="main-home-area__section">
                <div className="main-home-area__section-title-wrapper">
                    <h2 className="main-home-area__section-title">Игры по темам</h2>
                    <Button type={'only icon'} content={''} isLinked={true} iconType={'arrow'}/>
                </div>
                <GameCardsList/>
            </section>
            <section className="main-home-area__section">
                <div className="main-home-area__section-title-wrapper">
                    <h2 className="main-home-area__section-title">Теория</h2>
                    <Button type={'only icon'} content={''} isLinked={true} iconType={'arrow'}/>
                </div>
                <TheoryTable/>
            </section>
            </div>
            </div>
        </main>
    )
}


const HomePage = () => {
    return (
        <div className="home-page">
            <UserPanel/>
            <MainArea/>
        </div>
    )
}

export { HomePage }