import './TheoryBlock.scss';
import { Button } from "../Button/Button";
import React from "react";
import { theoryCardsListAtom, theoryBlockAtom } from '../../utility/model/model';
import { useAtom } from '@reatom/npm-react';

interface theoryCellProps {
    id?: string;
    sequenceNum: number;
    content: string;
    size: "default" | "small";
}

const TheoryCell = (props: theoryCellProps) => {
    let modificator = ""
    let textModificator = ""
    if (props.size) {
        modificator = "theory-cell_size_" + props.size
        textModificator = "theory-cell__content_size_" + props.size
    }
    return (
        <div className={"theory-cell " + modificator}>
            <span className={"theory-cell__content " + textModificator}>{props.content}</span>
            <Button type={'only icon'} content={''} isLinked={true} iconType={'arrow-blue'} withBackground={true} id={props.id} />
        </div>
    )
}

export const TheoryTable = () => {
    const [theoryCardsList] = useAtom(theoryCardsListAtom)
    return (
        <div className="theory-table">
            <ol className="theory-table__list">
                {
                    theoryCardsList.map(({ title, id }) =>
                        <li>
                            <TheoryCell sequenceNum={1} content={title} id={id} size={"default"} />
                        </li>
                    )
                }
            </ol>
        </div>
    )
}

const SingleBlock = (props: theoryCellProps) => {
    return (
        <div className="theory-block-area">
            <TheoryCell sequenceNum={1} content={props.content} id={props.id} size={"small"} />
        </div>
    )
}

export const SingleBlockList = () => {
    const [theoryCardsList] = useAtom(theoryCardsListAtom)
    return (
        <div className="theory-list">
            {
                theoryCardsList.map(({ title, id }) =>
                    <SingleBlock sequenceNum={1} content={title} id={id} size={"default"} />
                )
            }
        </div>
    )
}

export const TheoryContentBlock = () => {
    const [theoryBlock] = useAtom(theoryBlockAtom)
    return (
        <div className="theory-selected-block">
            {
                theoryBlock.map(({ type, content }) =>
                    <>
                        {
                            type === "header" &&
                            <div className="theory-selected-block__header">
                                <h2 className="theory-selected-block__text-default-header">
                                    {content}
                                </h2>
                            </div>
                        }
                        {
                            type === "subtitle" &&
                            <div className="theory-selected-block__subtitle">
                                <h3 className="theory-selected-block__text-subtitle-header">
                                    {content}
                                </h3>
                            </div>
                        }
                        {
                            type === "main-text" &&
                            <div className="theory-selected-block__main-text">
                                <p className="theory-selected-block__text-default">
                                    {content}
                                </p>
                            </div>
                        }
                        {
                            type === "important-text" &&
                            <div className="theory-selected-block__important-text-area">
                                <p className="theory-selected-block__text-large">
                                    {content}
                                </p>
                            </div>
                        }
                    </>
                )
            }
        </div>
    )
}