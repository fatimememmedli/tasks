import { useState } from "react";
import "./App.css";
import * as React from "react";
import axios from "axios";

import Cardss from "./components/Cardss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import TodoApp from "./components/TodoApp";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState("");

  // console.log(value);
  const [search, setSearch] = useState("istanbul");
  const [data, setData] = useState({});
  console.log(search);

  console.log(search);
  return (
    <ChakraProvider>
      <div>
        <div>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{ border: "1px solid black" }}
            type="text"
          />
          <button
            onClick={(e) => {
              setSearch(value);
              {
                axios(`https://api.github.com/users/${search}`).then((res) => {
                  setData(res.data);
                  console.log(res.data);
                });
              }
            }}
          >
            search
          </button>
          {data.login && (
            <Card>
              <CardHeader>
                <Heading size="md">{data?.login} </Heading>
              </CardHeader>
              <CardBody>
                <Text>{data?.type}</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
