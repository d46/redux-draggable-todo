const schema = require('../models/Schema')
module.exports = new Promise((resolve, reject) => {
    const Event = require('../models/Event')
    const Task = require('../models/Task')
    schema.adapter.automigrate(() => {
        resolve(true)
    })
})
