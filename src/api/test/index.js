const test = require('ava')
const EventSource = require('../EventSource')
const reducers = require('../Reducers')
const eventSource = new EventSource(reducers)
const Task = require('../models/Task')
const actions = require('../Actions')

// migration.then(() => {
//
//     eventSource.addEvent({
//         eventName: actions.ADD_NEW_TASK,
//         eventPayload: {
//             name: "test",
//             index: 1
//         }
//     })
//

//
//     eventSource.addEvent({
//         eventName: actions.ADD_NEW_TASK,
//         eventPayload: {
//             name: "test 2",
//             index: 2
//         }
//     })
//
//     eventSource.addEvent({
//         eventName: actions.SORT_TASK,
//         eventPayload: {
//             oldIndexId: 1,
//             newIndexId: 2,
//             oldIndex: 1,
//             newIndex: 2
//         }
//     })
//
// })

test('Add new task', async t => {

    eventSource.addEvent({
        eventName: actions.ADD_NEW_TASK,
        eventPayload: {
            name: "test",
            index: 1
        }
    })

    eventSource.addEvent({
        eventName: actions.ADD_NEW_TASK,
        eventPayload: {
            name: "test 2",
            index: 2
        }
    })

    let task = await Task.findOne({
        where: {
            id: 1
        }
    })

    let task2 = await Task.findOne({
        where: {
            id: 2
        }
    })

    t.deepEqual(task.toJSON(), { taskName: 'test', taskStatus: false, taskIndex: 1, id: 1 })
    t.deepEqual(task2.toJSON(), { taskName: 'test 2', taskStatus: false, taskIndex: 2, id: 2 })

});

test('Edit task', async t => {

    eventSource.addEvent({
        eventName: actions.EDIT_TASK,
        eventPayload: {
            id: 1,
            name: "test",
            status: true
        }
    })

    let task = await Task.findOne({
        where: {
            id: 1
        }
    })

    t.deepEqual(task.toJSON(), { taskName: 'test', taskStatus: true, taskIndex: 1, id: 1 })

});

test('Edit task', async t => {

    eventSource.addEvent({
        eventName: actions.SORT_TASK,
        eventPayload: {
            oldIndexId: 1,
            newIndexId: 2,
            oldIndex: 1,
            newIndex: 2
        }
    })

    let task = await Task.findOne({
        where: {
            id: 1
        }
    })

    t.deepEqual(task.toJSON(), { taskName: 'test', taskStatus: true, taskIndex: 2, id: 1 })

});

test('Remove tasks', async t => {

    eventSource.addEvent({
        eventName: actions.REMOVE_TASK,
        eventPayload: {
            id: 1
        }
    })

    eventSource.addEvent({
        eventName: actions.REMOVE_TASK,
        eventPayload: {
            id: 2
        }
    })

    let task = await Task.findOne({
        where: {
            id: 1
        }
    })

    t.deepEqual(task.toJSON(), null)

});
