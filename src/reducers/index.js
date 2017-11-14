import {
    ADD_NEW_TASK,
    REMOVE_TASK,
    SORT_TASK,
    TOGGLE_STATUS
} from '../actions'
import {arrayMove} from 'react-sortable-hoc'

let id = 0
const reducers = (state, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_NEW_TASK:
            action.task.id = ++id
            return {
                ...state,
                tasks: [action.task, ...state.tasks]
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
            console.log('toggleStatus')
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id !== action.task.id) {
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
