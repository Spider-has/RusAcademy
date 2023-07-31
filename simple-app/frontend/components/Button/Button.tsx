import './Button.scss'
import React from 'react';
import {ButtonIcon} from "../ButtonIcon/ButtonIcons";

interface ButtonProps {
    id?: string;
    iconType?: 'house' | 'exit' | 'achievement' | 'arrow' | 'arrow-blue' | undefined;
    classMod?: string;
    onClick?: () => void;
    withBackground?: boolean;
    type: 'with icon' | 'default' | 'only icon';
    content: string;
    isLinked: boolean;
}

export const Button = (props: ButtonProps) => {
    let buttonStyle = 'button '
    if(props.classMod){
        buttonStyle += "button_" + props.classMod
    }
    if(props.type == 'with icon'){
        if(props.isLinked){
            return(
                <a className={buttonStyle} onClick={props.onClick}>
                    <ButtonIcon type={props.iconType} />
                    <span>
                        {props.content}
                    </span>
                </a>
            )
        }
        else{
            return(
                <button className={buttonStyle} id = {props.id} onClick={props.onClick}>
                    <ButtonIcon type={props.iconType}/>
                    <span>{props.content}</span>
                </button>
            )
        }
    }
    else if(props.type == 'default'){
        if(props.isLinked){
            return(
                <a className={buttonStyle} onClick={props.onClick}>
                    <span>
                        {props.content}
                    </span>
                </a>
            )
        }
        else{
            return(
                <button className={buttonStyle} id = {props.id} onClick={props.onClick}>
                    <span>{props.content}</span>
                </button>
            )
        }
    }
    else if(props.type == 'only icon'){
        if(props.isLinked){
            return(
                <a className={buttonStyle} onClick={props.onClick}>
                    <ButtonIcon type={props.iconType} size = "small" withBackground={props.withBackground}/>
                </a>
            )
        }
    }
}