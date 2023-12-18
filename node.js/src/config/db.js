// getting-started.js
const mongoose = require("mongoose");
function dbConnect() {}
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected mongo");
  })
  .catch((err) => {
    console.log("failed", err);
  });
