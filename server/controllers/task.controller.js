const Task = require("../models/task.model");
const paginationHelper = require('../helper/pagination.helper')

//[patch]/task/changestatus
module.exports.changeStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;

  await Task.updateOne(
    {
      _id: id,
    },
    {
      status: status,
    }
  );
  res.json({
    code: 200,
    message: "Cập nhật thành công",
  });
};

//[patch]/task/changeMulti
module.exports.changeMulti = async (req, res) => {
  const listId = req.body.listId;
  const status = req.body.status;

  if (req.body.action) {
    await Task.updateMany({
      _id: { $in: listId },
    }, {
      deleted: true
    })
  }

  await Task.updateMany(
    {
      _id: { $in: listId },
    },
    {
      status: status,
      deleted: req.body.deleted
    }
  );
  res.json({
    code: 200,
    message: "Hoàn thành",
  });
};

//[POST]/Task/create
module.exports.create = async (req, res) => {
  //nguoi tao
  req.body.createdBy = req.user.token;

  const task = new Task(req.body);
  await task.save();
  res.json({
    code: 200,
    message: "Tạo mới thành công",
    taskNew: task
  });
}

//[patch]/task/edit
module.exports.edit = async (req, res) => {
  await Task.updateOne(
    {
      _id: req.params.id,
    },
    req.body
  );
  res.json({
    code: 200,
    message: "Chỉnh sửa thành công",
  });
};

//[delete]/task/delete
module.exports.delete = async (req, res) => {
  await Task.updateOne({
    _id: req.params.id
  }, {
    deleted: true
  })
  res.json({
    code: 200,
    message: "Xóa thành công",
  });
}

//[get]/task
module.exports.task = async (req, res) => {
  const find = {
    //danh sach task theo user
    $or:[
      {createdBy: req.user.token},
      {listUser: req.user.token}
    ],
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  const sort = {};

  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue;
  }else{
    sort["createdAt"] = "desc";
  }

  if (req.query.keyword) {
    const keyword = new RegExp(req.query.keyword, "i");
    find.title = keyword;
  }

  const paginationObject = await paginationHelper(req.query, req.user.token);

  const task = await Task.find(find)
    .sort(sort)
    .skip(paginationObject.skip)
    .limit(paginationObject.limitItems);

  console.log(task)
  res.json({
    taskList: task,
    totalPage: paginationObject.totalPage,
    totalItem: paginationObject.totalItem,
    limitItem: paginationObject.limitItems
  });
};

//[get]/task/detail
module.exports.detail = async (req, res) => {
  const id = req.params.id
  const task = await Task.findOne({
    _id:id
  })
  res.json({
    code:200,
    message:"Chi tiết công việc",
    detail: task
  })

}

// [GET] /task/sub-task/:id
module.exports.subTask = async (req, res) => {
  const taskId = req.params.taskId
  let countSubTask = 0
  const listSubTask = await Task.find({
    taskParentId: taskId
  })

  if(listSubTask){
    countSubTask = listSubTask.length
  }

  res.json({
    listSubTask: listSubTask,
    totalSubTask: countSubTask
  })
}

