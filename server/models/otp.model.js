const mongoose = require("mongoose");  

const OtpSchema = mongoose.Schema({
    email:String,
    otp:String,
    expireAt:{
        type:Date,
        expires: 0
    }
})

const Otp = mongoose.model("Otp",OtpSchema,"otp")

module.exports = Otp