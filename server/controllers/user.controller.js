const User = require("../models/user.models");
const md5 = require("md5");
const generateHelper = require("../helper/genarate.helper");

//[post]/User/register
module.exports.register = async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const fullname = req.body.fullname

  const exitsEmail = await User.findOne({
    email: email,
  })

  if(exitsEmail){
    res.json({
        code:400,
        message: "Email đã tồn tại"
    })
    return
  }

  const newUser = new User({
    fullname: fullname,
    email: email,
    password: md5(password)
  })

  newUser.token = generateHelper.generateRandomString(20)

  await newUser.save()

  res.cookie("tokenUser", newUser.token)

  res.json({
    code:200,
    message:"Đăng kí tài khoản thành công"
  })
};

//[post]/User/login
module.exports.login = async (req, res) => {
  const existUser = await User.findOne({
    email: req.body.email,
  });

  if (!existUser) {
    res.json({
      code: 400,
      message: "email khong ton tai",
    });
    return;
  }

  if (md5(req.body.password) !== existUser.password) {
    res.json({
      code: 400,
      message: "khong dung mat khau",
    });
    return;
  }

  res.cookie("tokenUser", existUser.token);
  res.json({
    code: 200,
    message: "dang nhap thanh cong",
  });
};