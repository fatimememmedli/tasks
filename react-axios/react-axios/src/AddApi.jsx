import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
function AddApi({ data, setData }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    return () => {
      console.log("silindi");
    };
  }, []);

  return (
    <div>
      Edit Api
      <div>
        <input
          onChange={(e) => {
            // console.log(e.target.value);
            setName(e.target.value);
          }}
          placeholder="name"
          type="text"
          name=""
          id=""
        />
        <input
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="description"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={() => {
            let obj = {
              name: name,
              description: desc,
            };
            axios
              .post(
                "https://6554d84863cafc694fe7169d.mockapi.io/categories/categories/",
                obj
              )
              .then((res) => {
                setData([...data, res.data]);
              });
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default AddApi;
