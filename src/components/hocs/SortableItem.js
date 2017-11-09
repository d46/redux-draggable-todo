import React from 'react'
import {SortableElement} from 'react-sortable-hoc'
import style from "./SortableItem.styl"
import Icon from 'react-icons-kit';
import {checkmark} from 'react-icons-kit/icomoon/checkmark';
import {bin} from 'react-icons-kit/icomoon/bin';

export default SortableElement(({value}) => {
        let classNameContainer = [style.iconContainer];
        if (value === 'Item 2') {
            classNameContainer.push(style.iconContainerDone)
        }

        let classNameItem = [style.item];
        if (value === 'Item 2') {
            classNameItem.push(style.itemDone)
        }


        return (
            <li className={classNameItem.join(' ')}>
                <div className={classNameContainer.join(' ')}>
                    <Icon icon={checkmark}/>
                </div>
                {value}
                <button className={style.removeContainer}>
                    <Icon icon={bin}/>
                </button>
            </li>
        )
    }
);
