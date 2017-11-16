const Task = require('./models/Task')
const actions = require('./Actions')

const Reducers = (event) => {
    return new Promise((resolve, reject) => {
        switch (event.eventName) {
            case actions.REMOVE_TASK:
                Task.remove({
                    where: {
                        id: event.payload.id
                    }
                }, () => {
                    resolve()
                })
                break
            case actions.ADD_NEW_TASK:
                Task.create({
                    name: event.payload.name,
                    status: false,
                    index: event.payload.index
                }, () => {
                    resolve()
                })

                break
            case actions.EDIT_TASK:
                Task.update({
                    where: {
                        id: event.payload.id
                    }
                }, {
                    name: event.payload.name,
                    status: event.payload.status
                }).then(() => {
                    resolve()
                }).catch((e) => {
                    reject(e)
                })
                break
            case actions.TOGGLE_STATUS:
                Task.update({
                    where: {
                        id: event.payload.id
                    }
                }, {
                    status: event.payload.status
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
