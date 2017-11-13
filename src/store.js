import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers"
import {submit} from "./middlewares"

const initalData = {
    tasks: [{
        id:1,
        value: 'Item 1',
        status: 0
    }, {
        id:2,
        value: 'Item 2',
        status: 0
    }, {
        id:3,
        value: 'Item 3',
        status: 0
    }, {
        id:4,
        value: 'Item 4',
        status: 0
    }]
}

const store = createStore(
    reducers,
    initalData,
    // applyMiddleware(submit)
)
export default store

