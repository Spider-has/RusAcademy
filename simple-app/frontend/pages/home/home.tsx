import './home.scss'
import { Avatar } from "../../components/avatar/avatar";
import { Button } from "../../components/Button/Button";
import React from 'react';
import {LeaderTable} from "../../components/leaderTable/leaderTable";
import {GameCardsList} from "../../components/gameCard/gameCard";
import {TheoryTable} from "../../components/TheoryBlock/TheoryBlock";
import {logInUserAtom} from "../../utility/model/model"
import { useAtom } from '@reatom/npm-react';

const UserPanel = () => {
    const [logInUser] = useAtom(logInUserAtom);
    return (
        <header className="user-panel">
            <div className = "user-panel__wrapper">
                <div className="user-panel__user-info">
                    <Avatar type={"light"} size={"large"} withCrown={false} />
                    <h1 className="user-panel__title">{logInUser.surname} {logInUser.name}</h1>
                    <h2 className="user-panel__subtitle">Ученик {logInUser.class} класса</h2>
                    <span className="user-panel__text">{logInUser.email}</span>
                </div>
                <div className="user-panel__user-score">
                    <h2 className="user-panel__subtitle">Всего баллов: </h2>
                    <span className="user-panel__score-text">{logInUser.totalScore}</span>
                </div>
                <div className="user-panel__user-navigation">
                    <div className="user-panel__user-navigation-activity">
                        <Button type={'with icon'}
                            iconType={"achievement"}
                            onClick={() => { }}
                            content={"Достижения"}
                            isLinked={true}
                            id = "achive" />
                        <Button type={'with icon'}
                            iconType={"house"}
                            onClick={() => { }}
                            content={"Личный кабинет"}
                            isLinked={true} 
                            id = "profile" />
                    </div>
                    <div>
                        <Button type={'with icon'}
                            iconType={"exit"}
                            onClick={() => { }}
                            content={"Выход из аккаунта"}
                            isLinked={true} 
                            id = "exit"/>
                    </div>
                </div>
            </div>
        </header>
    )
}



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