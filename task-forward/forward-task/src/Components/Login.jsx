import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

function Login({
  checkProduct,
  setCheckProduct,
  users,
  setUsers,
  setIsLogged,
  islogged,
}) {
  const [loginName, setLoginName] = useState("");
  const [loginPass, setLoginPass] = useState("");
  return (
    <div className="container">
      <h1>Login</h1>
      <Input
        onChange={(e) => {
          e.preventDefault();
          console.log(e.target.value);
          setLoginName(e.target.value);
        }}
        placeholder="enter username"
        size="md"
      />
      <Input
        onChange={(e) => {
          e.preventDefault();
          console.log(e.target.value);
          setLoginPass(e.target.value);
        }}
        placeholder="enter password"
        size="md"
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          users.forEach((elem) => {
            if (elem.username == loginName && elem.password == loginPass) {
              //   setIsLogged(false);
              setCheckProduct(true);
            }
          });
        }}
        colorScheme="purple"
      >
        Login
      </Button>
      <Button
        onClick={() => {
          setIsLogged(false);
        }}
        colorScheme="red"
      >
        Register
      </Button>
    </div>
  );
}

export default Login;
