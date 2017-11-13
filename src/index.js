import React from 'react'
import ReactDOM from 'react-dom'
import TodoListContainers from './containers/TodoListContainer'
import {Provider} from "react-redux";
import store from './store'
import style from './style.styl'

ReactDOM.render(
    <Provider store={store}>
        <TodoListContainers />
    </Provider>,
    document.getElementById('root')
);
