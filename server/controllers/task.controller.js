const Task = require('../models/task.model')

module.exports.task = async (req, res) => {
    const find = {
        deleted: false
    }
    
    if(req.query.status){
        find.status = req.query.status
    }

    const task = await Task.find(find)
    res.json(task)
}