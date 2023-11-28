import { Category } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

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
      {data.map((elem, i) => {
        return <CategoryCard category={elem} key={i} />;
      })}
    </div>
  );
}

export default Categories;
