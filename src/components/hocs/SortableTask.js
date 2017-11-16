import React, {Component} from 'react'
import {SortableElement} from 'react-sortable-hoc'
import style from "./SortableTask.styl"
import Icon from 'react-icons-kit';
import {checkmark} from 'react-icons-kit/icomoon/checkmark';
import {bin} from 'react-icons-kit/icomoon/bin';


class SortableTask extends Component {


    constructor(props) {
        super(props)
        this.state = {
            editableTask: false
        }

        this.removeTask = this.removeTask.bind(this)
        this.submitEditTask = this.submitEditTask.bind(this)
        this.handleEditTask = this.handleEditTask.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
        this.toggleEditable = this.toggleEditable.bind(this)
        this.toggleStatus = this.toggleStatus.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            editTaskTitle: nextProps.task.title
        })
    }

    removeTask() {
        const {
            removeTask,
            task
        } = this.props
        removeTask(task)
    }

    submitEditTask() {
        const {
            handleEditTask,
            task
        } = this.props
        task.title = this.state.editTaskTitle
        handleEditTask(task)
        this.setState({
            editableTask: false
        })
    }

    handleEditTask(e) {
        this.setState({
            editTaskTitle: e.target.value
        })
    }

    handleEnter(e) {
        if (e.key === 13) {
            this.submitEditTask()
        }
    }

    toggleEditable(editableTask) {
        this.setState({
            editableTask: true
        })
    }

    toggleStatus() {
        const {
            task,
            toggleStatus
        } = this.props
        toggleStatus(task)
    }

    render() {
        let classNameContainer = [style.iconContainer];
        let classNameItem = [style.item];
        const {
            task
        } = this.props
        if (task.status) {
            classNameItem.push(style.itemDone)
            classNameContainer.push(style.iconContainerDone)
        }

        return (
            <li className={classNameItem.join(' ')}>
                <div onClick={this.toggleStatus} className={classNameContainer.join(' ')}>
                    <Icon icon={checkmark}/>
                </div>
                <div className={style.valueContainer} onClick={this.toggleEditable}>
                    {!this.state.editableTask && this.props.task.title}
                    {this.state.editableTask && <input value={this.state.editTaskTitle}
                                                       onChange={this.handleEditTask}
                                                       onBlur={this.submitEditTask}
                                                       onKeyPress={this.handleEnter}
                                                       type="text"/>}
                </div>
                <button onClick={this.removeTask} className={style.removeContainer}>
                    <Icon icon={bin}/>
                </button>
            </li>
        )
    }
}


export default SortableElement(SortableTask)
