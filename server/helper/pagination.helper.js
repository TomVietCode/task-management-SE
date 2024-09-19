const Task = require('../models/task.model')
module.exports = async (query) => {
    const paginationObject = {
        currentPage: 1,
        limitItems: 3,
      };
    
      if (query.page) {
        paginationObject.currentPage = query.page
      }
    
      paginationObject.skip =
        (paginationObject.currentPage - 1) * paginationObject.limitItems;
    
      const count = await Task.countDocuments({
        delete: false,
      });
      paginationObject.total = Math.ceil(count / paginationObject.limitItems);
    
    return paginationObject
  }


  