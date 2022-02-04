import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import axios from 'axios';
const Login = () => {
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formChange = (e) => {
    e.preventDefault()
  }


  const login = async (name, password) => {
    try{
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    const response = await axios.post(`http://localhost:5000/users/login`, {
        name, password
    }, config)
			localStorage.setItem("token", response.data);
			window.location = "/admin";
    }catch(error){
      if ( error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  }
  
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5">
      <h1 className="text-center">Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={formChange}>
          <MDBInput
            className="mb-4"
            type="text"
            id="form1Example1"
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)} 
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form1Example2"
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} 
          />
          <MDBBtn onClick={() => login(name, password)} type="submit" block>
            Sign in
          </MDBBtn>
        </form>
      </div>
    </div>
  );
};

export default Login;
