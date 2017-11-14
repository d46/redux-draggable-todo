const Task = require('./models/Task')
const actions = require('./Actions')

const Reducers = (event) => {
    console.log(event);
    return new Promise((resolve, reject) => {
        switch (event.eventName) {
            case actions.REMOVE_TASK:
                Task.remove({
                    where: {
                        id: event.eventPayload.id
                    }
                }, () => {
                    resolve()
                })
                break
            case actions.ADD_NEW_TASK:
                Task.create({
                    taskName: event.eventPayload.name,
                    taskStatus: false,
                    taskIndex: event.eventPayload.index
                }, () => {
                    resolve()
                })

                break
            case actions.SORT_TASK:
                Task.update({
                    where: {
                        id: event.eventPayload.newIndexId
                    }
                }, {
                    taskIndex: event.eventPayload.oldIndex
                }).then(() => {
                    Task.update({
                        where: {
                            id: event.eventPayload.oldIndexId
                        }
                    }, {
                        taskIndex: event.eventPayload.newIndex
                    }).then(() => {
                        resolve()
                    }).catch((e) => {
                        reject(e)
                    })
                }).catch((e) => {
                    reject(e)
                })

                break
            case actions.EDIT_TASK:
                Task.update({
                    where: {
                        id: event.eventPayload.id
                    }
                }, {
                    taskName: event.eventPayload.name,
                    taskStatus: event.eventPayload.status
                }).then(() => {
                    resolve()
                }).catch((e) => {
                    reject(e)
                })
                break
        }
    })
}

module.exports = Reducers
