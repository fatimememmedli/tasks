import React from "react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
function Register({ users, setUsers, isLoged, setIsLogged }) {
  const [registerName, setRegisterName] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  return (
    <div className="container">
      <h1>Register</h1>
      <Input
        onChange={(e) => {
          e.preventDefault();
          setRegisterName(e.target.value);
        }}
        placeholder="Enter username"
        size="md"
      />
      <Input
        onChange={(e) => {
          e.preventDefault();
          setRegisterPass(e.target.value);
        }}
        type={"password"}
        placeholder="Enter password"
        size="md"
      />
      <Input
        onChange={(e) => {
          e.preventDefault();
          setRegisterEmail(e.target.value);
        }}
        type={"email"}
        placeholder="Enter email"
        size="md"
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          let obj = {
            username: registerName,
            password: registerPass,
            email: registerEmail,
          };
          axios.post(
            "https://6556137684b36e3a431ef611.mockapi.io/usernameProducts/userss",
            obj
          );

          setIsLogged(true);
        }}
        colorScheme="linkedin"
      >
        Register
      </Button>
    </div>
  );
}

export default Register;
