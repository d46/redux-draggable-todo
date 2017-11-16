const schema = require('./Schema')

const Event = schema.define('Task', {
    name: String,
    status: schema.JSON,
    prevId: Number
})

module.exports = Event
