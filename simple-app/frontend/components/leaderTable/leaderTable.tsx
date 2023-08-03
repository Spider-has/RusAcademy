import './leaderTable.scss'
import React, { ReactNode } from "react";
import {Avatar} from "../avatar/avatar";
import { topStudentsListAtom } from '../../utility/model/model';
import { useAtom } from '@reatom/npm-react';

interface TableCellProps {
    isFirst?: boolean,
    studentAvatar?: string,
    id?: string,
    sequenceNum: number,
    studentFullName: string,
    studentScore: number,
}

type LeaderTableProps = Array<TableCellProps>;

const TableCell = (props: TableCellProps) => {
    return(
        <div className="table-cell">
            <span className="table-cell__sequence-text">
                {props.sequenceNum}
            </span>
            {
                props.isFirst ?
                <Avatar type={'dark'} withCrown={true} size={'normal'}/>
                :
                <Avatar type={'dark'} withCrown={false} size={'normal'}/>
            }
            <span className="table-cell__name">
                {props.studentFullName}
            </span>
            <span className="table-cell__score">
                {props.studentScore}
            </span>
        </div>
    )
}



export const LeaderTable = () => {
    const [topStudentsList] = useAtom(topStudentsListAtom)
    return(
        <div className="leader-table">
            {
                topStudentsList.map(({name, surname, id, totalScore}, index) => 
                <>
                   { index === 0 ?
                        <TableCell isFirst = {true} sequenceNum={index + 1} studentFullName={surname + " " + name} studentScore={totalScore} id = {id}/>
                    :
                        <TableCell sequenceNum={index + 1} studentFullName={surname + " " + name} studentScore={totalScore} id = {id}/>
                    }
                </> 
                )
            }
        </div>
    )
}