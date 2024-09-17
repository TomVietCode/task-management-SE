const mongoose = require('mongoose')

module.exports.connect = async (req, res) => {
    try {
        await mongoose.connect('mongodb://localhost:27017/task-management')
        console.log('Connected')
    } catch (error) {
        console.log('Can not connect')
    }
}