import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditBlog from "./EditBlog";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { putBlog } from "./BlogSlice";
import { deleteBlogById } from "./BlogSlice";
import axios from "axios";
function BlogCard({ elem }) {
  const [textNameValue, setTextNameValue] = useState(elem.textName);
  const [state, setState] = useState(false);
  const [textValue, setTextValue] = useState(elem.text);
  const blogsArr = useSelector((state) => state.createBlog.blogs);
  const dispatch = useDispatch();

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
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {elem.textName}
        </Typography>

        <Typography variant="body2">
          {elem.text}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          name={elem.id}
          onClick={(e) => {
            let object = {
              id: e.target.getAttribute("name"),
              textName: textNameValue,
              text: textValue,
            };
            console.log(blogsArr);
            dispatch(putBlog(object));
            axios(
              "https://6576df61197926adf62ca428.mockapi.io/blogs/blogs"
            ).then((res) => {
              console.log(res.data);
            });
          }}
          variant="contained"
        >
          Edit
        </Button>
        <Button
          name={elem.id}
          variant="outlined"
          onClick={(e) => {
            // console.log(e.target.getAttribute("name"));
            console.log(blogsArr);
            dispatch(deleteBlogById(e.target.getAttribute("name")));
          }}
          color="error"
        >
          Delete
        </Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <TextField
          value={textNameValue}
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => {
            setTextNameValue(e.target.value);
          }}
        />
        <TextField
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
          value={textValue}
          id="outlined-basic"
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default BlogCard;
