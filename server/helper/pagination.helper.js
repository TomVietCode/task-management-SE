const Task = require('../models/task.model')
module.exports = async (query, token) => {
    const paginationObject = {
        currentPage: 1,
        limitItems: 10,
      };
    
      if (query.page) {
        paginationObject.currentPage = query.page
      }
    
      paginationObject.skip =
        (paginationObject.currentPage - 1) * paginationObject.limitItems;
    
      const count = await Task.countDocuments({
        $or:[
          {createdBy: token},
          {listUser: token}
        ],
        deleted: false,
      });
      
      paginationObject.totalItem = count
      paginationObject.totalPage = Math.ceil(count / paginationObject.limitItems);
    
    return paginationObject
  }


  