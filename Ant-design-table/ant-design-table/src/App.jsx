import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Table } from "antd";
import { Button, Modal } from "antd";
import axios from "axios";
import "./App.css";
import Modals from "./Modals";
import { Input } from "antd";

function App() {
  const [datas, setDatas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpens, setIsModalOpens] = useState(false);
  const [addCompanyName, setCompanyName] = useState("");
  const [addContactName, setContactName] = useState("");
  const [addContactTitle, setContactTitle] = useState("");
  const [editCompanyName, setEditCompanyName] = useState("");
  const [editContactName, setEditContactName] = useState("");
  const [editContactTitle, setEditContactTitle] = useState("");
  console.log(addCompanyName);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    console.log("add butonu");
    let obj = {
      companyName: addCompanyName,
      contactName: addContactName,
      contactTitle: addContactTitle,
    };
    setDatas([...datas, obj]);
    console.log(obj);
    fetch("https://northwind.vercel.app/api/suppliers", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => setDatas([...datas, json]));
  };
  const handleOke = () => {
    setIsModalOpens(false);
    console.log("edit butonu");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancels = () => {
    setIsModalOpens(false);
  };
  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      setDatas(res.data);
    });
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Tittle",
      dataIndex: "Tittle",
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
      onFilter: (value, record) => record.Tittle.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "delete",
      dataIndex: "delete",
      render: (text, record) => (
        <Button
          onClick={() => {
            console.log(record);
            fetch(`https://northwind.vercel.app/api/suppliers/${record.id}`, {
              method: "DELETE",
            });
            setDatas((datas) =>
              datas.filter((element) => element.id !== record.id)
            );
          }}
          type="primary"
        >
          {"delete"}
        </Button>
      ),
    },
    {
      title: "edit",
      dataIndex: "edit",
      render: (text, record) => {
        return (
          <>
            <Button
              onClick={() => {
                showModal();
              }}
              type="primary"
            >
              {"edit"}
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalOpens}
              onOk={handleOke}
              onCancel={handleCancels}
            >
              <Input
                onChange={(e) => {
                  setEditCompanyName(e.target.value);
                }}
                placeholder="Basic usage"
              />
              <Input
                onChange={(e) => {
                  setEditContactName(e.target.value);
                }}
                placeholder="Basic usage"
              />
              <Input
                onChange={(e) => {
                  setEditContactTitle(e.target.value);
                }}
                placeholder="Basic usage"
              />
            </Modal>
            ;
          </>
        );
      },
    },
    {
      title: "add",
      dataIndex: "add",
      render: () => {
        return (
          <>
            <Button
              onClick={() => {
                showModal();
              }}
              type="primary"
            >
              {"Add"}
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Input
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                placeholder="companyName"
              />
              <Input
                onChange={(e) => {
                  setContactName(e.target.value);
                }}
                placeholder="contactName"
              />
              <Input
                onChange={(e) => {
                  setContactTitle(e.target.value);
                }}
                placeholder="contactTitle"
              />
            </Modal>
            ;
          </>
        );
      },
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={datas.map((elem) => {
          return {
            id: elem?.id,
            name: elem?.companyName,
            Tittle: elem?.contactName,
          };
        })}
        onChange={onChange}
      />
    </>
  );
}

export default App;
