const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());
let datas = [
  {
    id: 1,
    name: "Shakira",
    age: 40,
    image:
      "https://media.allure.com/photos/651f1227680aeb3afa86b8f2/16:9/w_2560%2Cc_limit/shakira%2520super%2520long%2520hair%2520.jpg",
  },
  {
    id: 2,
    name: "Ariana",
    age: 20,
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/2eeb419/2147483647/strip/true/crop/1690x1199+0+0/resize/1200x851!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fab%2F97%2Fdc146b3b401a93d5bb4ec1cd7930%2Fpeople-ariana-grande-62442.jpg",
  },
  {
    id: 3,
    name: "Taylor Swift",
    age: 30,
    image:
      "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/05/12/16839087103970.png",
  },
  {
    id: 4,
    name: "Billie Eilish",
    age: 22,
    image:
      "https://assets.teenvogue.com/photos/63b827a9b90b383663d1b036/3:2/w_1920,h_1280,c_limit/BILLIE%20EILISH%20BODY%2005012023-sq.jpg",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/singers", (req, res) => {
  console.log(req.query.name);
  if (req.query.name) {
    res.send(datas.filter((elem) => elem.name === req.query.name));
  } else {
    res.send(datas);
  }
});
app.get("/singers/:id", (req, res) => {
  //   console.log(req.params.id);
  let find = datas.find((elem) => elem.id == req.params.id);
  res.send(find);
});

app.post("/singers", (req, res) => {
  let singer = req.body;
  datas.push(singer);
});
app.delete("/singers/:id", (req, res) => {
  datas = datas.filter((elem) => elem.id != req.params.id);
  res.send(datas);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
