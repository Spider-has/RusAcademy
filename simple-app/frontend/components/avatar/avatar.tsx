import './avatar.scss'
import React from 'react';
// @ts-ignore
import avatarIconLight from './icons/avatar-icon-light.svg'; import avatarIconDark from './icons/avatar-icon-dark.svg';  import crownIcon from './icons/crown.svg'

interface avatarProps {
    type: 'light' | 'dark';
    withCrown: boolean;
    size: 'normal' | 'large'
}

export const Avatar = (props: avatarProps) => {
    let src = '';
    switch (props.type){
        case "light":
            src = avatarIconLight;
            break;
        case "dark":
            src = avatarIconDark;
            break;
    }
    let size = '';
    switch(props.size){
        case "normal":
            size = "avatar-icon_size_normal"
            break;
        case "large":
            size = "avatar-icon_size_large"
    }
    return(
        <div className={"avatar-icon " + size}>
            {
                props.withCrown ?
                    <>
                        <img className = "avatar-icon__crown" src = {crownIcon} alt = "crown icon"/>
                        <img className = "avatar-icon__img" src={src} alt = "user avatar"/>
                    </>
                    :
                    <img className = "avatar-icon__img" src={src} alt = "user avatar"/>
            }

        </div>
    )
}