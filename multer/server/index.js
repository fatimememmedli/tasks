const express = require("express");
const app = express();
const port = 3000;
// app.use(express.static("public"));
const multer = require("multer");
const arr = [];
const upload = require("./upload");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Set up a route for file uploads
app.post("/users", upload.single("file"), (req, res) => {
  console.log(req);
  //   console.log(req.title);
  // Handle the uploaded file
  res.send({ message: "File uploaded successfully!" });
});
app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
