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

    const paginationObject = {
        currentPage: 1, 
        limitItems: 3
    }

    if(req.query.page){
        paginationObject.currentPage = req.query.page
    }

    paginationObject.skip = (paginationObject.currentPage - 1) * paginationObject.limitItems
    
    const count = await Task.countDocuments({
        delete: false})
    paginationObject.total = Math.ceil(count / paginationObject.limitItems)

    const task = await Task
    .find(find)
    .sort(sort)
    .skip(paginationObject.skip)
    .limit(paginationObject.limitItems)
    res.json(task)
}