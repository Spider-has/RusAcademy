import './gameCard.scss'
import {Button} from "../Button/Button";
import React from "react";
import { gameCardsListAtom } from '../../utility/model/model';
import { useAtom } from '@reatom/npm-react';

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
                        onClick = {() => {}}
                        classMod = "gradient"
                        id = {props.id}/>
            </div>
     </div>
    )
}

export const GameCardsList = () => {
    const [gameCardsList] = useAtom(gameCardsListAtom)
    return(
        <div className="game-cards-area">
           { 
            gameCardsList.map(({title, id}) => 
                <GameCard content = {title} id = {id}/>
            )
            }
        </div>
    )
}