import got from "got"
import {
    ADD_NEW_TASK,
    EDIT_TASK,
    REMOVE_TASK
} from "../actions"
import {SORT_TASK, TOGGLE_STATUS} from "../actions/index";

export const api = store => next => action => {
    next(action)
    let data
    switch (action.type) {
        case ADD_NEW_TASK:
            data = JSON.stringify({
                eventName: action.type,
                eventPayload: {
                    name: action.task.value,
                    index: store.getState().tasks.length - 1
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

        case TOGGLE_STATUS:
            data = JSON.stringify({
                eventName: action.type,
                eventPayload: {
                    id: action.task.id,
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
        case SORT_TASK:
            let state = store.getState();
            data = JSON.stringify({
                eventName: action.type,
                eventPayload: {
                    newIndexId: state.tasks[action.sort.oldIndex].id,
                    oldIndexId: state.tasks[action.sort.newIndex].id,
                    oldIndex: action.sort.oldIndex,
                    newIndex: action.sort.newIndex
                }
            })
            got.post('localhost:3000', {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: data
            })
    }

}
