import {ADD_NEW_TASK, INITIAL_DATA, REMOVE_TASK, SORT_TASK, TOGGLE_STATUS} from '../actions'
import {arrayMove} from 'react-sortable-hoc'

let id = 0
const reducers = (state, action) => {
    switch (action.type) {
        case INITIAL_DATA:
            const {
                tasks
            } = action.INITIAL_DATA

            let orderedTasks = []
            let headTask = tasks.find(task => !!task.prevId === false)
            orderedTasks.push(headTask)

            tasks.forEach(i => {
                let tailTask = orderedTasks[orderedTasks.length - 1]
                let nextTask = tasks.find(task => task.prevId === tailTask.id)
                nextTask && orderedTasks.push(nextTask)
            })
            return {
                ...action.INITIAL_DATA,
                tasks: orderedTasks
            }
        case ADD_NEW_TASK:
            let lastTask = state.tasks[state.tasks.length]
            action.task.id = ++id
            if (lastTask) {
                action.task.prevId = lastTask.id
            }
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        case SORT_TASK:
            const {
                oldIndex,
                newIndex
            } = action.sort
            return {
                ...state,
                tasks: arrayMove(state.tasks, oldIndex, newIndex)
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.task.id)
            }
        case TOGGLE_STATUS:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.task.id) {
                        task.status = !task.status
                    }
                    return task
                })
            }

        default:
            return state
    }

}

export default reducers
