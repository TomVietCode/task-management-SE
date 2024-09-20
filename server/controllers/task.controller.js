const Task = require("../models/task.model");
const paginationHelper = require('../helper/pagination.helper')


//[get]/task
module.exports.task = async (req, res) => {
  const find = {
    //danh sach task theo user
    $or:[
      {createdBy: req.user.id },
      {listUser: req.user.id}
    ],
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  const sort = {};

  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue;
  }

  if (req.query.keyword) {
    const keyword = new RegExp(req.query.keyword, "i");
    find.title = keyword;
  }

  const paginationObject = await paginationHelper(req.query);
  console.log(paginationObject)


  const task = await Task.find(find)
    .sort(sort)
    .skip(paginationObject.skip)
    .limit(paginationObject.limitItems);
  res.json(task);
};
//[patch]/task/changestatus
module.exports.changeStatus = async (req, res) => {
  const id = req.body.id;
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
  req.body.createdBy = req.user.id;

  const task = new Task(req.body);
  await task.save();
  res.json({
    code: 200,
    message: "Tạo mới thành công"
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




