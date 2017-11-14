import React, {Component} from "react"
import SortableList from "./hocs/SortableList"
import Icon from 'react-icons-kit'
import {plus} from 'react-icons-kit/icomoon/plus'
import style from "./TodoList.styl"
import NewSortableItem from "./hocs/NewSortableTask";

class TodoListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newTask: ''
        }
        this.handleNewTask = this.handleNewTask.bind(this)
        this.addNewTask = this.addNewTask.bind(this)
        this.submitNewTask = this.submitNewTask.bind(this)
    }

    handleNewTask(e) {
        this.setState({
            newTask: e.target.value
        })
    }

    submitNewTask(e) {
        if (e.key === 'Enter') {
            this.addNewTask()
        }
    }

    addNewTask() {
        const {
            newTask
        } = this.state
        if (newTask.length > 3) {
            const {
                handleNewTask
            } = this.props;
            handleNewTask({
                value: newTask,
                id: 0,
                status: false
            })
            this.setState({
                newTask: ''
            })
        }
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.header}>
                    Task Manager
                    <button className={style.addButton}>
                        <Icon icon={plus}/>
                    </button>
                </div>
                <NewSortableItem
                    newTask={this.state.newTask}
                    addNewTask={this.addNewTask}
                    handleNewTask={this.handleNewTask}
                    submitNewTask={this.submitNewTask}
                />
                <SortableList
                    lockAxis="y"
                    distance={10}
                    tasks={this.props.tasks}
                    onSortEnd={this.props.onSortEnd}
                    removeTask={this.props.removeTask}
                    handleEditTask={this.props.handleEditTask}
                    toggleStatus={this.props.toggleStatus}
                />
            </div>
        )
    }

}

export default TodoListComponent
