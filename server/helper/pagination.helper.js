const Task = require('../models/task.model')
module.exports = async (query, id) => {
    const paginationObject = {
        currentPage: 1,
        limitItems: 8,
      };
    
      if (query.page) {
        paginationObject.currentPage = query.page
      }
    
      paginationObject.skip =
        (paginationObject.currentPage - 1) * paginationObject.limitItems;
    
      const count = await Task.countDocuments({
        taskParentId: null,
        $or:[
          {createdBy: id},
          {listUser: id}
        ],
        deleted: false,
      });
      
      paginationObject.totalItem = count
      paginationObject.totalPage = Math.ceil(count / paginationObject.limitItems);
    
    return paginationObject
  }


  