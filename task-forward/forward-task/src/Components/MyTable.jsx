import React from "react";
import "../../src/MyTable.css";
import axios from "axios";

import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
function MyTable() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios(
      "https://6556137684b36e3a431ef611.mockapi.io/usernameProducts/products"
    ).then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="table-container">
      <h1>Table</h1>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((elem, i) => {
              if (elem.sale) {
              }
              return (
                <Tr key={i}>
                  <Td>{elem.id}</Td>
                  <Td>{elem.name}</Td>
                  <Td isNumeric>{elem.price}</Td>
                  <Td isNumeric>{elem.stockCount}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyTable;
