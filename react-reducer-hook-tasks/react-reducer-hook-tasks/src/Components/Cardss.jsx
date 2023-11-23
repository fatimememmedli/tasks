import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "../assets/style/Cards.module.css";
import Grid from "@mui/material/Grid";
export default function MediaCard() {
  return (
    <div className={style.container}>
      <Grid
        style={{ display: "flex", justifyContent: "center" }}
        container
        spacing={2}
      >
        <Grid item lg={4} sm={12} md={6}>
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1700746442~exp=1700747042~hmac=ef4382b017773072356c6c063698eb4b039826a985ba0c005b64ad9179c5b709"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Heading
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW</Button>
              <Button size="small">EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
