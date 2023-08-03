import './TheoryBlock.scss';
import {Button} from "../Button/Button";
import React from "react";
import { theoryCardsListAtom } from '../../utility/model/model';
import { useAtom } from '@reatom/npm-react';

interface theoryCellProps {
    id?: string;
    sequenceNum: number;
    content: string;
}

const TheoryCell = (props: theoryCellProps) => {
    return(
        <div className="theory-cell">
            <span className="theory-cell__content">{props.content}</span>
            <Button type={'only icon'} content={''} isLinked={true} iconType={'arrow-blue'} withBackground={true} id = {props.id}/>
        </div>
    )
}

export const TheoryTable = () => {
    const [theoryCardsList] = useAtom(theoryCardsListAtom)
    return(
        <div className="theory-table">
            <ol className="theory-table__list">
                {
                    theoryCardsList.map(({title, id}) => 
                    <li>
                        <TheoryCell sequenceNum={1} content={title} id = {id}/>
                    </li>
                    )
                }
            </ol>
        </div>
    )
}