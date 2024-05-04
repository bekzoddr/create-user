import React, { useState } from "react";
import { useCreateUserMutation } from "../../context/createUser";
import { Container, TextField, Button } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [phones, setPhones] = useState([]);
  const [tel, setTel] = useState("");
  console.log(phones);
  const [createUser, { data, error, isLoading }] = useCreateUserMutation();
  const navigate = useNavigate();

  if (error) {
    alert(error.data.message);
  }

  if (data?.variant === "success") {
    navigate("/users");
  }

  console.log("data >>>", data);

  const handleAddTelNumber = () => {
    setPhones((p) => [...p, tel]);
    setTel("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    let user = {
      FirstName,
      LastName,
      phones,
      role,
      password,
      UserName,
      isActive: true,
    };
    createUser(user);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <h2>Create user</h2>
        <form onSubmit={handleSignUp} className="form" action="">
          <br />
          <div className="name">
            <TextField
              id="outlined-basic"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              label="Last Name"
              variant="outlined"
            />
          </div>

          <div className="number">
            {" "}
            <PatternFormat
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              format="+998 ## ### ## ##"
              allowEmptyFormatting
              mask="_"
            />
            <Button
              onClick={handleAddTelNumber}
              type="button"
              variant="outlined"
              className="button"
            >
              add
            </Button>
          </div>
          <div className="username">
            {" "}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              name=""
              id=""
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="owner">Owner</option>
            </select>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={UserName}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              label="create username"
            />
          </div>
          <TextField
            id="outlined-basic"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            label=" create password"
            variant="outlined"
          />
          <div className="btn">
            {" "}
            <Button variant="contained">Sign Up</Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default CreateUser;
