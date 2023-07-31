import './leaderTable.scss'
import React from "react";
import {Avatar} from "../avatar/avatar";

interface TableCellProps {
    isFirst?: boolean,
    studentAvatar?: string,
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
    let LeaderTableCells = [];
    for (let i = 1; i <= 10; i++){
        LeaderTableCells[i] = <TableCell sequenceNum={i} studentFullName={"Иванов Артем"} studentScore={50} isFirst={false}/>
        if(i === 1){
            LeaderTableCells[i] = <TableCell sequenceNum={i} studentFullName={"Иванов Артем"} studentScore={50} isFirst={true}/>
        }
    }

    return(
        <div className="leader-table">
            {
                LeaderTableCells
            }
        </div>
    )
}