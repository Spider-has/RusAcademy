import './ButtonIcons.scss'
import React from 'react';
// @ts-ignore
import profile from './Icons/profile.svg'; import exit from './Icons/exit.svg'; import achievement from './Icons/achievement.svg'; import arrow from './Icons/arrow.svg';
// @ts-ignore
import arrowBlue from './Icons/blue-arrow.svg'; import hoverArrow from "./Icons/hover-arrow.svg"; import hoverExit from "./Icons/exit-hover.svg"; import hoverProfile from "./Icons/profile-hover.svg"; import hoverAchievement from "./Icons/achievement-hover.svg"; import hoverBlackArrow from "./Icons/arrow-black-hover.svg" 

interface ButtonIconProps {
    type: 'house' | 'exit' | 'achievement' | 'arrow' | 'arrow-blue' | undefined;
    size?: 'small';
    withBackground?: boolean;
}

export const ButtonIcon = (props: ButtonIconProps) => {
    let src = "";
    let hoverSrc = "";
    switch (props.type) {
        case "house":
            src = profile;
            hoverSrc = hoverProfile;
            break;
        case "exit":
            src = exit;
            hoverSrc = hoverExit;
            break;
        case "achievement":
            src = achievement;
            hoverSrc = hoverAchievement;
            break;
        case "arrow":
            src = arrow;
            hoverSrc = hoverBlackArrow;
            break;
        case "arrow-blue":
            src = arrowBlue;
            hoverSrc = hoverArrow;
            break;
    }
    let mod = 'default'
    if (props.size == "small") {
        mod = 'arrow'
    }
    let background = false;
    if (props.withBackground == true) {
        background = true;
    }
    return (
        <div className='button-icon-wrapper'>
            {
                background ?
                    <div className="background_button-icon">
                        {/* <img className = {"button-icon button-icon_" + mod}
                         src = {src}
                         alt = {props.type + "icon"}/> */}
                    </div>
                    :
                    <>
                        <img className={"button-icon button-icon_" + mod}
                            src={src}
                            alt={props.type + "icon"} />
                        <img className={"button-icon button-icon_hovered button-icon_" + mod}
                            src = {hoverSrc}
                            alt = {props.type + " icon hovered"}>
                        </img>
                    </>
            }
        </div>
    )
}