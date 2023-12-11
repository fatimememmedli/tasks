import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogSlice from "./BlogSlice";
import { getAllBlogs } from "./BlogSlice";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import BlogCard from "./BlogCard";
import style from "./Blogs.module.css";
function Blogs() {
  const blogsArr = useSelector((state) => state.createBlog.blogs);
  const [sortArray, setSortArray] = useState([]);
  const [data, setData] = useState(blogsArr);
  let array = [];
  const dispatch = useDispatch();
  console.log(sortArray);
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  blogsArr &&
    blogsArr.map((elem) => {
      array.push(elem);
      console.log(array);
    });
  return (
    <div className={style.container}>
      <div>
        <Button
          onClick={() => {
            console.log(blogsArr);
            array = array.sort(function (a, b) {
              if (a.textName < b.textName) {
                return -1;
              }
              if (a.textName > b.textName) {
                return 1;
              }
              return 0;
            });
            setData(array);
            console.log(array);
          }}
          variant="contained"
          color="secondary"
        >
          Sort
        </Button>
      </div>
      {data &&
        data.map((elem, i) => {
          return <BlogCard key={i} elem={elem} />;
        })}
    </div>
  );
}

export default Blogs;
