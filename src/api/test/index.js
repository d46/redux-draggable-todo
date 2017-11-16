const test = require('ava')
const EventSource = require('../EventSource')
const reducers = require('../Reducers')

const Task = require('../models/Task')
const actions = require('../Actions')

test('EventSource - Add one event to source', t => {
    let map = []
    const event = {
        eventName: actions.ADD_NEW_TASK
    }
    const eventSource = new EventSource(async (event) => {
        await map.push(event)
    })
    eventSource.addEvent(event)
    t.deepEqual(map[0], event)
})

test('EventSource - Add 10k event to source', async t => {
    let map = []
    const eventSource1 = new EventSource(async (event) => {
        await map.push(event)
    })
    const event = {
        eventName: actions.ADD_NEW_TASK
    }
    for(let i=0;i<10000;i++) {
        eventSource1.addEvent(event)
    }
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1)
    })
    t.is(map.length, 10000)
})


