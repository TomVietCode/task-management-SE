const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  
  fullname: String,
  email: String,
  password: String,
  address: String,
  token: String,
  phone: String
},
  {
    timestamps:true
  }
)

const User = mongoose.model("User",Userschema,"user")

module.exports = User;
