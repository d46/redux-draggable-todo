import React from 'react'
import ReactDOM from 'react-dom'
import TodoListContainers from './containers/TodoListContainer'
import {Provider} from "react-redux";
import store from './store'
import {INITIAL_DATA} from './actions/index';
import got from 'got'
import style from './style.styl'

got.get('localhost:3000', {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
}).then((data) => {
    console.log();
    store.dispatch({
        type: INITIAL_DATA,
        INITIAL_DATA: {
            tasks: JSON.parse(data.body).map((task) => {
                return {
                    id:task.id,
                    value: task.taskName,
                    index: task.taskIndex,
                    status: task.taskStatus
                }
            })
        }
    })
})


ReactDOM.render(
    <Provider store={store}>
        <TodoListContainers/>
    </Provider>,
    document.getElementById('root')
);
