import React from 'react';
import "./gameStart.scss"
import { Button } from '../../components/Button/Button';
//@ts-ignore
import planet from "./images/planet.svg"; import rocket from "./images/rocket.svg"

export const GameStart = () => {
    return(
        <main className = 'game-start'>
            <div className='header'>
                <Button type={'only icon'} content={''} isLinked={true} iconType={'arrow-blue'} withBackground={true}/>
            </div>
            <div className = "main-content">
                <div className = 'main-content__text-block'>
                    <h1 className='main-content__text'>
                        Начни учить прямо сейчас!
                    </h1>
                </div>
                <div className='main-content__button'>
                    <Button type={'default'}
                        content={'играть'}
                        isLinked={true}
                        onClick = {() => {}}
                        classMod = "gradient"
                        id = {"play"} />
                </div>
            </div>
            <div className='rocket-area'>
                    <img className='planet' src = {planet} alt = "planet"/>
                    <img className='rocket' src = {rocket} alt = "rocket"/>
                </div>
        </main>
    )
}