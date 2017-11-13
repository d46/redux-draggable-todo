const Task = require('./Task')

const Reducers = (event) => {
    console.log(event.eventName);
    switch (event.eventName) {
        case "DELETE":
            Task.remove({
                where:{
                    id: event.eventPayload.id
                }
            })
            break
        case "ADD":
            Task.create({
                taskName: event.eventPayload.name,
                taskStatus: false
            },(e)=>{
                console.log(e);})
            break
        case "EDIT":
            Task.update({
                where:{
                    id: event.eventPayload.id
                }
            },{
                taskName: event.eventPayload.name,
                taskStatus: event.eventPayload.status
            })
            break
    }
}

module.exports = Reducers
