import {
    ADD_NEW_TASK
} from '../actions'
import {REMOVE_TASK, SORT_TASK} from "../actions/index";
import {arrayMove} from 'react-sortable-hoc'

let id = 4
const reducers = (state, action) => {
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
                tasks: state.tasks.filter(item => item.id !== action.task.id)
            }
        default:
            return state
    }

}

export default reducers
