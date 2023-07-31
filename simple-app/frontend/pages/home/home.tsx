import './home.scss'
import { Avatar } from "../../components/avatar/avatar";
import { Button } from "../../components/Button/Button";
import React from 'react';
import {LeaderTable} from "../../components/leaderTable/leaderTable";
import {GameCard} from "../../components/gameCard/gameCard";
import {TheoryTable} from "../../components/TheoryBlock/TheoryBlock";

interface UserPanelProps {
    studentFullName: string;
    studentClass: number;
    studentEmail: string;
    studentScore: number;
}

const UserPanel = (props: UserPanelProps) => {
    return (
        <header className="user-panel">
            <div className = "user-panel__wrapper">
                <div className="user-panel__user-info">
                    <Avatar type={"light"} size={"large"} withCrown={false} />
                    <h1 className="user-panel__title">{props.studentFullName}</h1>
                    <h2 className="user-panel__subtitle">Ученик {props.studentClass} класса</h2>
                    <span className="user-panel__text">{props.studentEmail}</span>
                </div>
                <div className="user-panel__user-score">
                    <h2 className="user-panel__subtitle">Всего баллов: </h2>
                    <span className="user-panel__score-text">{props.studentScore}</span>
                </div>
                <div className="user-panel__user-navigation">
                    <div className="user-panel__user-navigation-activity">
                        <Button type={'with icon'}
                            iconType={"achievement"}
                            onClick={() => { }}
                            content={"Достижения"}
                            isLinked={true} />
                        <Button type={'with icon'}
                            iconType={"house"}
                            onClick={() => { }}
                            content={"Личный кабинет"}
                            isLinked={true} />
                    </div>
                    <div>
                        <Button type={'with icon'}
                            iconType={"exit"}
                            onClick={() => { }}
                            content={"Выход из аккаунта"}
                            isLinked={true} />
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
                <div className="game-cards-area">
                    <GameCard content={"Гласные в корнях с чередованием"}/>
                    <GameCard content={"НЕ с прилагательными и существительными"}/>
                    <GameCard content={"Ё-О после шипящих в корнях, суффиксах и окончаниях"}/>
                </div>
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
            <UserPanel studentFullName={"Иванов Артем"}
                studentClass={5}
                studentEmail={"ivanovartem2010@gmail.com"}
                studentScore={50} />
            <MainArea/>
        </div>
    )
}

export { HomePage }