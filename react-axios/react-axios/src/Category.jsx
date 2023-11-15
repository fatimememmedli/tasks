import axios from "axios";
import React from "react";
import AddApi from "./AddApi";

function Category({ data, setData }) {
  return (
    <>
      {data.map((elem, i) => {
        return (
          <li key={i}>
            {elem.name}
            <button data-id={elem.id} onClick={() => {}}>
              edit
            </button>
            <button
              onClick={(e) => {
                let arr = [...data];
                arr = arr.filter(
                  (elem) => elem.id != e.target.getAttribute("data-id")
                );

                setData(arr);
                axios.delete(
                  "https://6554d84863cafc694fe7169d.mockapi.io/categories/categories/" +
                    e.target.getAttribute("data-id")
                );
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </>
  );
}

export default Category;
