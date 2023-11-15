import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import AddApi from "./AddApi";

function Categories() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(
      "https://6554d84863cafc694fe7169d.mockapi.io/categories/categories/"
    ).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  //   console.log(data);
  return (
    <>
      <ul>
        <Category data={data} setData={setData} />
      </ul>
      <AddApi data={data} setData={setData} />
    </>
  );
}

export default Categories;
