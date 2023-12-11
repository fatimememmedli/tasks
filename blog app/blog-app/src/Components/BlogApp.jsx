import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./../Components/BlogApp.module.css";
import { postBlog } from "./BlogSlice";
import { updateBlogs } from "./BlogSlice";
function BlogApp() {
  const [textName, setTextName] = useState("");
  const [text, setText] = useState("");
  const blogObj = useSelector((state) => state.createBlog.blog);
  const blogsArr = useSelector((state) => state.createBlog.blogs);
  console.log(blogsArr);
  console.log(blogObj);
  const dispatch = useDispatch();
  console.log(blogObj);
  return (
    <div>
      <div className={style.container}>
        <div className={style.text}>
          <h1>Create Blogs</h1>
        </div>
        <div className={style.inputs}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            variant="filled"
            label="Name"
            size="small"
            onChange={(e) => {
              setTextName(e.target.value);
            }}
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            label=""
            variant="filled"
            size="small"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              let obj = {
                textName: textName,
                text: text,
              };
              dispatch(updateBlogs(obj));
              dispatch(postBlog(obj));
            }}
            variant="contained"
          >
            Contained
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BlogApp;
