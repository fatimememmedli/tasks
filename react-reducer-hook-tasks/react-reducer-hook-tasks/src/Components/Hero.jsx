import React from "react";
import style from "../assets/style/Hero.module.css";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MediaCard from "./Cardss";

function Hero({ value, setValue, search, setSearch }) {
  const [data, setData] = useState([]);
  const [age, setAge] = React.useState("");
  const [year, setYear] = useState(0);
  console.log(age);
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };
  console.log(data);
  return (
    <div className={style.container}>
      <div style={{ marginBottom: "100px" }}>
        <p style={{ textAlign: "center", fontSize: "50px" }}>Album layout</p>
        <p style={{ textAlign: "center", fontSize: "25px" }}>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <div className={style.buttons}>
          <TextField
            onChange={(e) => {
              // console.log(e.target.value);
              setValue(e.target.value);
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              onChange={handleChange}
              value={age}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={(e) => {
              setSearch(value);
              axios(
                `https://www.omdbapi.com/?s=${search}&y=${age}&apikey=37517ef3`
              ).then((res) => {
                // console.log(res.data);
                setData(res.data?.Search);
              });
            }}
            variant="contained"
          >
            search
          </Button>
          <Button variant="outlined">secondary action</Button>
        </div>
        <div>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            container
            spacing={2}
          >
            {data &&
              data.map((elem, i) => {
                console.log(elem);
                return (
                  <Grid key={i} item lg={4} sm={12} md={6}>
                    <Card sx={{ maxWidth: 250, height: 400 }}>
                      <CardMedia sx={{ height: 140 }} image={elem.Poster} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {elem.Title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {elem.Year}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">VIEW</Button>
                        <Button size="small">EDIT</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Hero;
