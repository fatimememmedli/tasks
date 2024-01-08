const express = require("express");
const app = express();
const port = 3000;
var fs = require('file-system');
const multer = require("multer");
const arr = [];
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadFolder = "./uploads/";
    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder);
    }
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Set up a route for file uploads
app.post("/users", upload.single("file"), (req, res) => {
  console.log(req);
  const {title} = req.body;
  //   console.log(req.title);
  // Handle the uploaded file
  const newUser = {
    title: title,
    profilePicture: req.file.path
}
res.send({ message: "File uploaded successfully!" , data: {
  title: newUser.title,
  fullPath: `http://localhost:3000/${newUser.profilePicture}`
}});
});
app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
