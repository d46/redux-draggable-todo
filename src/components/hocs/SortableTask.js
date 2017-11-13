import React from 'react'
import {SortableElement} from 'react-sortable-hoc'
import style from "./SortableTask.styl"
import Icon from 'react-icons-kit';
import {checkmark} from 'react-icons-kit/icomoon/checkmark';
import {bin} from 'react-icons-kit/icomoon/bin';

let editableTask = false
let editTaskValue = ''
export default SortableElement((props) => {
        let classNameContainer = [style.iconContainer];
        if (props.task.value === 'Item 2') {
            classNameContainer.push(style.iconContainerDone)
        }

        let classNameItem = [style.item];
        if (props.task.value === 'Item 2') {
            classNameItem.push(style.itemDone)
        }
        const removeTask = () => {
            const {
                removeTask,
                task
            } = this.props
            removeTask(task)
        }
        const toggleEditable = () => {
            editableTask = !editableTask
        }

        const submitEditTask = () => {
            const {
                handleEditTask,
                task
            } = this.props
            task.value = editTaskValue
            handleEditTask(task)
        }

        const handleEditTask = (e) => {
            editTaskValue = e.target.value
        }

        const handleEnter = (e) => {
            if(e.key === 13) {
                submitEditTask()
            }
        }

        return (
            <li className={classNameItem.join(' ')}>
                <div className={classNameContainer.join(' ')}>
                    <Icon icon={checkmark}/>
                </div>
                <div onClick={toggleEditable}>
                    {!editableTask && props.task.value}
                    {editableTask && <input value={props.task.value}
                                            onChange={handleEditTask}
                                            onBlur={submitEditTask}
                                            onKeyPress={handleEnter}
                                            type="text"/>}
                </div>
                <button onClick={removeTask} className={style.removeContainer}>
                    <Icon icon={bin}/>
                </button>
            </li>
        )
    }
);
