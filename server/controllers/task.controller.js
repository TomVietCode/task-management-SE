const Task = require('../models/task.model')

module.exports.task = async (req, res) => {
    const find = {
        deleted: false
    }
    
    if(req.query.status){
        find.status = req.query.status
    }

    const sort = {}
    
    if(req.query.sortKey && req.query.sortValue){
        sort[req.query.sortKey] = req.query.sortValue
    }

    const task = await Task.find(find).sort(sort)
    res.json(task)
}