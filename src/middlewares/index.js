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
                name: action.type,
                payload: {
                    title: action.task.title,
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
                name: action.type,
                payload: {
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
                name: action.type,
                payload: {
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
                name: action.type,
                payload: {
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
            let state = store.getState()
            const {
                tasks
            } = state
            let newIndex = action.sort.newIndex
            let oldIndex = action.sort.oldIndex
            let leftTask, rightTask, currentTask

            rightTask = tasks[newIndex + 1]
            if(!!rightTask) {
                rightTask.prevId = tasks[newIndex].id
            }

            if(oldIndex > newIndex) {
                leftTask = tasks[oldIndex]
                if(!!leftTask) {
                    let prevId = null
                    if(tasks[oldIndex - 1]) {
                        prevId = tasks[oldIndex - 1].id
                    }
                    leftTask.prevId = prevId
                }
            }else{
                leftTask = tasks[oldIndex + 1]
                if(!!leftTask) {
                    let prevId = null
                    if(tasks[oldIndex]) {
                        prevId = tasks[oldIndex].id
                    }
                    leftTask.prevId = prevId
                }
            }

            currentTask = tasks[newIndex]
            if(!!currentTask) {
                currentTask.prevId = tasks[newIndex - 1]
            }

            data = JSON.stringify({
                name: action.type,
                payload: {
                    leftTask: leftTask,
                    currentTask: currentTask,
                    rightTask: rightTask,
                }
            })
            got.post('localhost:3000', {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: EDIT_TASK,
                    payload: rightTask
                })
            })
            got.post('localhost:3000', {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: EDIT_TASK,
                    payload: leftTask
                })
            })
            got.post('localhost:3000', {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: EDIT_TASK,
                    payload: currentTask
                })
            })
    }

}
