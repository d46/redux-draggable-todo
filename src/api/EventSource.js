const Event = require('./models/Event')

class EventSource {
    constructor(reducers) {
        this.memSource = []
        this.dmemSource = []
        this.sourceStatus = true
        this.reducers = reducers
    }

    addEvent(event) {
        // Commit event to db
        Event.create(event)
        if (this.sourceStatus) {
            this.memSource.push(event)
            this.runner()
        } else {
            this.dmemSource.push(event)
        }
    }

    runner() {
        if (this.memSource.length > 0) {
            this.sourceStatus = false
            this.reducers(this.memSource[0]).then(()=>{
                // Remove first event
                this.memSource = this.memSource.filter((e, i) => i !== 0)
                this.runner()
            }).catch((e)=>{
                // console.log(e);
            })
        }
        if(this.dmemSource.length > 0) {
            this.sourceStatus = true
            this.memSource = this.dmemSource
            this.dmemSource = []
            this.runner()
        }
        if(this.dmemSource.length === 0 && this.memSource.length === 0) {
            // console.log("Source empty.");
        }
    }
}

module.exports = EventSource
