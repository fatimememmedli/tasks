import React from "react";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://usersapitaskk.onrender.com/users").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "username", width: 130 },
    { field: "surname", headerName: "surname", width: 130 },
    { field: "delete", headerName: "delete", width: 130 },
    // { field: "lastName", headerName: "surname", width: 130 },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  function DataTable() {
    return (
      <div style={{ margin: "60px auto", width: "900px" }}>
        <div style={{ height: 400, width: "100%" }}>
          {data.map((elem) => {
            return;
          })}
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    );
  }
  return DataTable();
}

export default Users;
