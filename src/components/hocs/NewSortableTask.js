import React from 'react'
import style from './NewSortableTask.styl'
import Icon from 'react-icons-kit';
import {plus} from 'react-icons-kit/icomoon/plus';

export default ({
                    handleNewTask,
                    addNewTask,
                    submitNewTask
                }) => {
    return (
        <div className={style.item}>
            <div onClick={addNewTask} className={style.iconContainer}>
                <Icon size={25} icon={plus}/>
            </div>
            <input onChange={handleNewTask} onKeyPress={submitNewTask} className={style.input} type="text"/>
        </div>
    )
}
