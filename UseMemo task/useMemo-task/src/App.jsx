import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Table } from "antd";
import "./App.css";
import axios from "axios";
function App() {
  const [datas, setDatas] = useState([]);
  const [id, setid] = useState(0);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "id",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a?.address.localeCompare(b?.address),
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  useEffect(() => {
    {
      axios("https://northwind.vercel.app/api/suppliers").then((res) => {
        console.log(res.data);
        setDatas(res.data);
      });
    }
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={datas.map((elem) => {
          // console.log(elem);
          return {
            age: elem?.id,
            name: elem?.companyName,
            address: elem?.address?.city,
          };
        })}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
