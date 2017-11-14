const schema = require('./Schema')

const Event = schema.define('Task', {
    taskName: String,
    taskStatus: schema.JSON,
    taskIndex: Number
})

module.exports = Event
