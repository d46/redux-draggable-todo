import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers"
import {submit} from "./middlewares"

const initalData = {}

const store = createStore(
    reducers,
    initalData,
    // applyMiddleware(submit)
)
export default store

