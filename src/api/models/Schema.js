const caminte = require('caminte'),
    Schema = caminte.Schema,
    config = {
        driver: "sqlite3",
        database: "./DB.db"
    }

const schema = new Schema(config.driver, config)

module.exports = schema
