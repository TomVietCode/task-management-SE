const User = require("../models/user.models");
const Otp = require("../models/otp.model")
const md5 = require("md5");
const generateHelper = require("../helper/genarate.helper");
const sendmail = require("../helper/sendmail.helper")
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
      message: "Email khong ton tai",
    });
    return;
  }

  if (md5(req.body.password) !== existUser.password) {
    res.json({
      code: 400,
      message: "Không đúng mật khẩu",
    });
    return;
  }

  res.cookie("tokenUser", existUser.token);
  res.json({
    code: 200,
    message: "Đăng nhập thành công",
  });
};

//[post]/User/logout
module.exports.logout = async (req, res) => {
  if (req.cookies.tokenUser) {
    res.clearCookie("tokenUser");

    res.json({
      code: 200,
      message: "Đăng xuất thành công",
    });
  } else {
    res.json({
      code: 400,
      message: "Đăng xuất thất bại",
    });
  }
};

//[post] password/forgot
module.exports.forgotpass = async (req, res) => {
  const email = req.body.email;
  const otp = generateHelper.generateNumber(5);
  const existEmail = await User.findOne({
    email: email,
  });

  if (existEmail) {
    const objectOtp = new Otp({
      email: email,
      otp: otp,
      expireAt: Date.now() + 5 * 60 * 1000,
    });

    await objectOtp.save();

    const subject = "Mã OTP";
    const html = `Mã OTP của bạn là <b>${otp}</b>`;

    sendmail.sendmail(email, subject, html);

    res.json({
      code: 200,
      message: "gui ma otp thanh cong",
    });
  } else {
    res.json({
      code: 400,
      message: "gui ma otp that bai",
    });
  }
};
