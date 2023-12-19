const mongoose = require("mongoose");

// const dbConnect = async () => {
//   await mongoose.connect(process.env.MONGODB_URI);
//   console.log("connected mongoDB");
// };

// module.exports = dbConnect;
mongoose
  .connect(
    "mongodb+srv://bd7u8hqcl:salam@cluster0.sfo4yb3.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected mongoDB");
  })
  .catch((err) => {
    console.log("failed" + err);
  });
