const schema = require('./Schema')

const Event = schema.define('Event', {
    name: String,
    payload: schema.JSON
})

module.exports = Event
