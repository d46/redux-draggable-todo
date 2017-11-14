import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers"
import {api} from "./middlewares"

const initalData = {
    tasks: []
}

const store = createStore(
    reducers,
    initalData,
    applyMiddleware(api)
)

export default store

