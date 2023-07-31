import './gameCard.scss'
import {Button} from "../Button/Button";
import React from "react";

interface GameCardProps {
    content: string;
    id?: string
}

export const GameCard = (props: GameCardProps) => {
    return(
        <div className="game-card">
            <div className="game-card__text-wrapper">
                <span className="game-card__text">
                    {props.content}
                </span>
            </div>
            <div>
                <Button type={'default'}
                        content={'играть'}
                        isLinked={true}
                        onClick={() => {}}
                        classMod="gradient"/>
            </div>
     </div>
    )
}