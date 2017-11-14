const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const actions = require('./Actions')
const EventSource = require('./EventSource')
const reducers = require('./Reducers')
const migration = require('./utils/migrate_models')
const Task = require('./models/Task')
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
//     eventSource.addEvent({
//         eventName: actions.EDIT_TASK,
//         eventPayload: {
//             id: 1,
//             name: "test",
//             status: true
//         }
//     })
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

app.get('/', (req, res) => {
    Task.all((err, tasks) => {
        res.send(tasks)
    })
})

app.post('/', (req, res) => {
    let eventSource = new EventSource(reducers)
    eventSource.addEvent(req.body)
    res.sendStatus(200)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
