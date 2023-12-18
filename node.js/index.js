require("dotenv").config();
require("./src/config/db");
const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("http");
const app = express();
const userRouter = require("./src/routers/userRouter.js");
const port = process.env.PORT || 3000;
console.log("asdasd", process.env.PORT); //portu gosterir
app.use(bodyParser.json());
app.use("/", userRouter); // new
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/users", (req, res) => {
//   res.send(arr);
// });
// app.get("/users/:id", (req, res) => {
//   console.log(req.params.id);
//   let find = arr.find((elem) => elem.id == req.params.id);
//   res.send(find);
//   //   res.send(arr);
// });
// app.delete("/users/:id", (req, res) => {
//   //   console.log(req.params.id);
//   arr = arr.filter((elem) => elem.id != req.params.id);
//   res.send(arr);
// });
// app.post("/users/", (req, res) => {
//   const element = req.body;
//   arr.push(element);
//   res.send(arr);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
