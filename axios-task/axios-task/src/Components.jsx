import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Components() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products/").then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  return <></>;
}

export default Components;
