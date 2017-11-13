import TodoListComponent from '../components/TodoListComponent'
import {connect} from 'react-redux';
import {
    ADD_NEW_TASK,
    SORT_TASK
} from '../actions'
import {REMOVE_TASK} from "../actions/index";

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = {
    handleNewTask: (task) => ({
        type: ADD_NEW_TASK,
        task
    }),
    onSortEnd: (sort) => ({
        type: SORT_TASK,
        sort
    }),
    removeTask: (task) => ({
        type: REMOVE_TASK,
        task
    })
}


const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)

export default TodoListContainer
