const User = require("../models/user.models")
const Otp = require("../models/otp.model")
const md5 = require("md5")
const generateHelper = require("../helper/genarate.helper")
const sendmail = require("../helper/sendmail.helper")

//[post]/User/register
module.exports.register = async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const fullname = req.body.fullname

  const exitsEmail = await User.findOne({
    email: email,
  })

  if (exitsEmail) {
    res.json({
      code: 400,
      message: "Email đã tồn tại",
    })
    return
  }

  const newUser = new User({
    fullname: fullname,
    email: email,
    password: md5(password),
  })

  newUser.token = generateHelper.generateRandomString(20)

  await newUser.save()

  res.json({
    code: 200,
    message: "Đăng kí tài khoản thành công",
    token: newUser.token,
    id: newUser._id
  })
}

//[post]/User/login
module.exports.login = async (req, res) => {
  const existUser = await User.findOne({
    email: req.body.email,
  })

  if (!existUser) {
    res.json({
      code: 400,
      message: "Email không tồn tại",
    })
    return
  }

  if (md5(req.body.password) !== existUser.password) {
    res.json({
      code: 400,
      message: "Không đúng mật khẩu",
    })
    return
  }

  res.json({
    code: 200,
    message: "Đăng nhập thành công",
    token: existUser.token,
    id: existUser._id
  })
}

//[post]/User/logout
module.exports.logout = async (req, res) => {
  if (req.cookies.tokenUser) {
    res.clearCookie("tokenUser")

    res.json({
      code: 200,
      message: "Đăng xuất thành công",
    })
  } else {
    res.json({
      code: 400,
      message: "Đăng xuất thất bại",
    })
  }
}

//[post] password/forgot
module.exports.forgotpass = async (req, res) => {
  const email = req.body.email
  const otp = generateHelper.generateNumber(6)
  const existEmail = await User.findOne({
    email: email,
  })

  if (existEmail) {
    const objectOtp = new Otp({
      email: email,
      otp: otp,
      expireAt: Date.now() + 5 * 60 * 1000,
    })

    await objectOtp.save()

    const subject = " Mã xác nhận OTP"
    const html = `
    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
              <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">CELLO</a>
          </div>
          <p style="font-size:1.1em">Xin chào ${existEmail.email},</p>
          <p>Dưới đây là mã OTP xác thực để đổi mật khẩu. Vui lòng không chia sẻ cho bất kỳ ai. Mã OTP có hiệu lực trong 5 phút!</p>
          <h2
              style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">
              ${objectOtp.otp}</h2>
          <p style="font-size:0.9em;">Trân trọng,<br />CELLO</p>
          <hr style="border:none;border-top:1px solid #eee" />`

    sendmail.sendmail(email, subject, html)

    res.json({
      code: 200,
      message: "gui ma otp thanh cong",
    })
  } else {
    res.json({
      code: 400,
      message: "gui ma otp that bai",
    })
  }
}

//[post] /users/otp
module.exports.otp = async (req, res) => {
  const email = req.body.email
  const otp = req.body.otp

  const objectOtp = await Otp.findOne({
    email: email,
    otp: otp,
  })

  if (objectOtp) {
    const user = await User.findOne({
      email: email,
    })

    res.json({
      code: 200,
      token: user.token,
    })
  } else {
    ;(code = 400), (message = "MÃ OTP SAI")
  }
}

//[post] /users/ reserPassword
module.exports.resetPassword = async (req, res) => {
  const token = req.body.token
  const newPassword = req.body.newPassword

  await User.updateOne(
    {
      token: token,
    },
    {
      password: md5(newPassword),
    }
  )

  res.json({
    code: 200,
    message: "Đổi mật khẩu thành công",
  })
}

//[GET]/user/detail
module.exports.detail = async (req, res) => {
  res.json({
    code: 200,
    message: "Hoàn thành",
    info: req.user,
  })
}

//[GET]/user/list
module.exports.list = async (req, res) => {
  let users = []

  if (req.query.keyword) {
    const keyword = new RegExp(req.query.keyword, "i")
    users = await User.find({ fullname: keyword }).select("id fullname email").limit(7)
  }

  res.json({
    code: 200,
    users: users,
  })
}
