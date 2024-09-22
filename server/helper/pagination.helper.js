const Task = require('../models/task.model')
module.exports = async (query) => {
    const paginationObject = {
        currentPage: 1,
        limitItems: 7,
      };
    
      if (query.page) {
        paginationObject.currentPage = query.page
      }
    
      paginationObject.skip =
        (paginationObject.currentPage - 1) * paginationObject.limitItems;
    
      const count = await Task.countDocuments({
        deleted: false,
      });
      
      paginationObject.totalPage = Math.ceil(count / paginationObject.limitItems);
    
    return paginationObject
  }


  