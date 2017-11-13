const caminte = require('caminte'),
    Schema = caminte.Schema,
    config = {
        driver: "sqlite3",
        database: "./DB.db"
    }

const schema = new Schema(config.driver, config)

const Event = schema.define('Event', {
    eventName: String,
    eventPayload: schema.JSON
})

schema.adapter.autoupdate(() => {
    console.log("updated");
})

module.exports = Event
