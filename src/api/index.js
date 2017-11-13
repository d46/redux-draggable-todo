// const express = require('express')
// const app = express()
//
// app.get('/', (req, res) => res.send('Hello World!'))
// app.post('/', (req, res) => {
//     let action = ""
//     let payload = {}
//     res.send('Hello World!')
// })
//
// app.listen(3000, () => console.log('Example app listening on port 3000!'))


const EventSource = require('./EventSource')
const reducers = require('./Reducers')
let eventSource = new EventSource(reducers)

eventSource.addEvent({
    eventName: 'ADD',
    eventPayload: {
        name: "test"
    }
})

eventSource.addEvent({
    eventName: 'EDIT',
    eventPayload: {
        id: 1,
        name: "test",
        status: true
    }
})
