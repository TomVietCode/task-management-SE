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
    
    if(req.query.keyword){
        const keyword = new RegExp(req.query.keyword, "i")
        find.title = keyword
    }

    const task = await Task.find(find).sort(sort)
    res.json(task)
}