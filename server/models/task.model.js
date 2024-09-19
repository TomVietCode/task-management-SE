const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: String,
    status: String,
    content: String,
    timeStart: Date,
    timeFinish: Date,
    deleted:{
        type: Boolean,
        default: false
    }
},{
    timestamp: true
})

const Task = mongoose.model('Task', taskSchema, 'tasks')

module.exports = Task