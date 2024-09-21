const mongoose = require('mongoose')

module.exports.connect = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected')
    } catch (error) {
        console.log('Can not connect')
    }
}