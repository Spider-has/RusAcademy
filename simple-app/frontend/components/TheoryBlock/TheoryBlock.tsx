import './TheoryBlock.scss';
import {Button} from "../Button/Button";
import React from "react";

interface theoryCellProps {
    id?: string;
    sequenceNum: number;
    content: string;
}

const TheoryCell = (props: theoryCellProps) => {
    return(
        <div className="theory-cell">
            <span className="theory-cell__content">{props.content}</span>
            <Button type={'only icon'} content={''} isLinked={true} iconType={'arrow-blue'} withBackground={true}/>
        </div>
    )
}

export const TheoryTable = () => {
    return(
        <div className="theory-table">
            <ol className="theory-table__list">
                <li>
                    <TheoryCell sequenceNum={1} content={"Гласные в корнях с чередованием"}/>
                </li>
                <li>
                    <TheoryCell sequenceNum={1} content={"Ё-О после шипящих в корнях, суффиксах и окончаниях"}/>
                </li>
                <li>
                    <TheoryCell sequenceNum={1} content={"НЕ с прилагательными и существительными"}/>
                </li>
            </ol>
        </div>
    )
}