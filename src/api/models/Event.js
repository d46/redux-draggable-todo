const schema = require('./Schema')

const Event = schema.define('Event', {
    eventName: String,
    eventPayload: schema.JSON
})

module.exports = Event
