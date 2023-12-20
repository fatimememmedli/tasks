import React from "react";
import Navbar from "./../components/Navbar";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";
function Home() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/singers").then((res) => {
      setDatas(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "70%",
          margin: "200px auto",
          display: "flex",
          gap: "20px",
        }}
      >
        {datas &&
          datas.map((elem) => {
            return (
              <Card key={elem.id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={elem.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {elem.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {elem.age}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    name:number={elem.id}
                    onClick={() => {
                      axios
                        .delete(`http://localhost:3000/singers/${elem.id}`)
                        .then((res) => {
                          setDatas(res.data);
                        });
                    }}
                    color="error"
                    variant="contained"
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default Home;
