const Event = require('./models/Event')

class EventSource {
    constructor(reducers) {
        this.source = []
        this.bufferSource = []
        this.sourceStatus = true
        this.reducers = reducers
    }

    addEvent(event) {
        // Commit event to db
        Event.create(event)

        // Add event to source if source available
        // or add to bufferSource
        if (this.sourceStatus) {
            this.source.push(event)
            this.runner()
        } else {
            this.bufferSource.push(event)
        }
    }

    runner() {
        // Operate source container
        if (this.source.length > 0) {
            // Set operation status for source
            this.sourceStatus = false
            // Transmit the first source item to reducers
            return this.reducers(this.source[0]).then(() => {
                // Remove first event
                this.source = this.source.filter((e, i) => i !== 0)
                // Continue
                this.runner()
            }).catch((e) => {
                console.log(e);
            })
        }
        // In the mean time operating a source
        // new events flow to bufferSource
        if (this.bufferSource.length > 0) {
            // Set operation status for source
            this.sourceStatus = true
            // Set source from buffer
            this.source = this.bufferSource
            this.bufferSource = []
            return this.runner()
        }
        if (this.bufferSource.length === 0 && this.source.length === 0) {
            // Source empty
        }
    }
}

module.exports = EventSource
