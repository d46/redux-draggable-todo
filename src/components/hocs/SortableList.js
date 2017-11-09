import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import SortableItem from './SortableItem'
import style from "./SortableList.styl"

export default  SortableContainer(({items}) => {
    return (
        <ul className={style.container}>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </ul>
    );
});
