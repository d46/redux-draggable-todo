import React from 'react'
import style from './NewSortableItem.styl'
import Icon from 'react-icons-kit';
import {plus} from 'react-icons-kit/icomoon/plus';

export default () => {
    return (
        <div className={style.item}>
            <div className={style.iconContainer}>
                <Icon size={25} icon={plus}/>
            </div>
            <input className={style.input} type="text"/>
        </div>
    )
}
