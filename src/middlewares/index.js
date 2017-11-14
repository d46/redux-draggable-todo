import got from "got"
import {
    ADD_NEW_TASK,
    EDIT_TASK,
    REMOVE_TASK
} from "../actions"

export const api = store => next => action => {
    let data
    switch (action.type) {
        case ADD_NEW_TASK:
            data = JSON.stringify({
                eventName: action.type,
                eventPayload: {
                    name: action.task.value,
                    index: 0
                }
            })
            got.post('localhost:3000', {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: data
            })
            break
        case REMOVE_TASK:
            data = JSON.stringify({
                eventName: action.type,
                eventPayload: {
                    id: action.task.id,
                }
            })
            got.post('localhost:3000', {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: data
            })
            break

        case EDIT_TASK:
            data = JSON.stringify({
                eventName: action.type,
                eventPayload: {
                    name: action.task.id,
                    status: action.task.status,
                }
            })
            got.post('localhost:3000', {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: data
            })
            break
    }

    return next(action)
}
