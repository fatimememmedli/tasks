const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: String,
});
const User = mongoose.model("Post", schema);
module.exports = User;
