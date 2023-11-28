import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function CategoryDetail() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  let detail = data.find((elem) => elem.id == id);
  console.log(detail);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {detail?.name}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="body2">
          {detail?.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </React.Fragment>
  );

  return (
    <div
      style={{
        width: "70%",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        padding: "20px ",
      }}
    >
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}

export default CategoryDetail;
