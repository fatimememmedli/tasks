const express = require("express");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();
console.log(process.env.PORT);
const port = process.env.PORT || 3000;
require("./src/config/db.js");
const userRouter = require("./src/routers/userRouter");
app.use("/", userRouter);
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
