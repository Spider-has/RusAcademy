import './ButtonIcons.scss'
import React from 'react';
// @ts-ignore
import profile from './Icons/profile.svg'; import exit from './Icons/exit.svg'; import achievement from './Icons/achievement.svg'; import arrow from './Icons/arrow.svg'; import arrowBlue from './Icons/blue-arrow.svg'

interface ButtonIconProps {
    type: 'house' | 'exit' | 'achievement' | 'arrow' | 'arrow-blue' | undefined;
    size?: 'small';
    withBackground?: boolean;
}

export const ButtonIcon = (props: ButtonIconProps) => {
    let src = "";
    switch(props.type){
        case "house":
            src = profile;
            break;
        case "exit":
            src = exit;
            break;
        case "achievement":
            src = achievement;
            break;
        case "arrow":
            src = arrow;
            break;
        case "arrow-blue":
            src = arrowBlue;
            break;
    }
    let mod = 'default'
    if(props.size == "small"){
        mod = 'arrow'
    }
    let background = false;
    if(props.withBackground == true){
        background = true;
    }
    return(
        <>
        {
            background ?
                <div className="background_button-icon">
                    <img className = {"button-icon button-icon_" + mod}
                         src = {src}
                         alt = {props.type + "icon"}/>
                </div>
                :
            <img className = {"button-icon button-icon_" + mod}
             src = {src}
             alt = {props.type + "icon"}/>
        }
        </>
    )
}