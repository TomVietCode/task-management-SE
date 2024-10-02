const Task = require("../models/task.model")
const paginationHelper = require("../helper/pagination.helper")

//[patch]/task/changestatus
module.exports.changeStatus = async (req, res) => {
  const id = req.params.id
  const status = req.body.status

  await Task.updateOne(
    {
      _id: id,
    },
    {
      status: status,
    }
  )
  res.json({
    code: 200,
    message: "Cập nhật thành công",
  })
}

//[patch]/task/changeMulti
module.exports.changeMulti = async (req, res) => {
  const listId = req.body.listId
  const status = req.body.status

  if (req.body.action) {
    await Task.updateMany(
      {
        _id: { $in: listId },
      },
      {
        deleted: true,
      }
    )
  }

  await Task.updateMany(
    {
      _id: { $in: listId },
    },
    {
      status: status,
      deleted: req.body.deleted,
    }
  )
  res.json({
    code: 200,
    message: "Hoàn thành",
  })
}

//[POST]/Task/create
module.exports.create = async (req, res) => {
  //nguoi tao
  req.body.createdBy = req.user.id
  req.body.listUser = [
    { id: req.user.id, fullname: req.user.fullname, email: req.user.email },
  ]
  const task = new Task(req.body)
  await task.save()
  res.json({
    code: 200,
    message: "Tạo mới thành công",
    taskNew: task,
  })
}

//[patch]/task/edit
module.exports.edit = async (req, res) => {
  await Task.updateOne(
    {
      _id: req.params.id,
    },
    req.body
  )
  res.json({
    code: 200,
    message: "Chỉnh sửa thành công",
  })
}

// [PATCH] /task/add-user
module.exports.addUser = async (req, res) => {
  const userEmail = req.body.email
  const taskId = req.body.taskId
  const fullname = req.body.fullname
  try {
    await Task.updateOne(
      {
        _id: taskId,
      },
      {
        $push: {
          listUser: { id: req.body._id, fullname: fullname, email: userEmail },
        },
      }
    )

    res.json({
      code: 200,
      message: "Member added successfully!",
    })
  } catch (error) {
    res.json({
      code: 400,
      message: "Member added failed!",
    })
  }
}

//[delete]/task/delete
module.exports.delete = async (req, res) => {
  await Task.updateOne(
    {
      _id: req.params.id,
    },
    {
      deleted: true,
    }
  )
  res.json({
    code: 200,
    message: "Xóa thành công",
  })
}

//[get]/task
module.exports.task = async (req, res) => {
  const find = {
    taskParentId: null,
    //danh sach task theo user
    $or: [
      { createdBy: req.user.id },
      { listUser: { $elemMatch: { id: req.user.id } } },
    ],
    deleted: false,
  }

  if (req.query.status) {
    if(req.query.status === "leader"){
      find.createdBy = req.user.id
    }else if(req.query.status === "member"){
      find.createdBy = { $ne: req.user.id } 
    }else{
      find.status = req.query.status
    }
    console.log(find)
  }

  const sort = {}

  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue
  } else {
    sort["createdAt"] = "desc"
  }

  if (req.query.keyword) {
    const keyword = new RegExp(req.query.keyword, "i")
    find.title = keyword
  }

  const paginationObject = await paginationHelper(req.query, req.user.id)

  let task = await Task.find(find)
    .collation({ locale: "en" })
    .sort(sort)
    .skip(paginationObject.skip)
    .limit(paginationObject.limitItems)

  for (let item of task) {
    const totalSubTask = await Task.countDocuments({ deleted: false, taskParentId: item._id })
    item.totalSubTask = totalSubTask
  }

  res.json({
    taskList: task,
    totalPage: paginationObject.totalPage,
    totalItem: paginationObject.totalItem,
    limitItem: paginationObject.limitItems,
  })
}

//[get]/task/detail
module.exports.detail = async (req, res) => {
  const id = req.params.id
  const task = await Task.findOne({
    _id: id,
  })

  if (req.query.members) {
    res.json({
      code: 200,
      members: task.listUser,
    })
    return
  }
  res.json({
    code: 200,
    message: "Chi tiết công việc",
    detail: task,
  })
}

// [GET] /task/sub-task/:id
module.exports.subTask = async (req, res) => {
  const taskId = req.params.taskId
  const listSubTask = await Task.find({
    taskParentId: taskId,
    deleted: false
  }).sort({ createdAt: "desc" })

  res.json(listSubTask)
}

// [GET] /task/statistics/status
module.exports.statusStatistic = async (req, res) => {
  const summary = await Task.aggregate([
    {
      $match: {
        deleted: false,
        $or: [
          { createdBy: req.user.id },
          { listUser: { $elemMatch: { id: req.user.id } } },
        ],
      },
    },
    {
      $group: {
        _id: "$status",
        value: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        status: "$_id",
        value: 1,
      },
    },
  ])

  res.json(summary)
}
