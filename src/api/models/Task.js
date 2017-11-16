const schema = require('./Schema')

const Event = schema.define('Task', {
    taskName: String,
    taskStatus: schema.JSON,
    prevId: Number
})

module.exports = Event
