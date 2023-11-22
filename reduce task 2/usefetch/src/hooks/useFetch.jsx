import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      let getData;
      getData = await axios(url).then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          setError("error");
        }
      });
    }
    getData();
    console.log(data);
  }, []);
  return {
    data,
    error,
    loading,
  };
}
