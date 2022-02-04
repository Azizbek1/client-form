import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import axios from 'axios';
const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [regis, setRegis] = useState("");

  const formChange = (e) => {
    e.preventDefault()
    setName("")
    setPassword("")
  }

    const register = async (name, password) => {
        try{
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
            const response = await axios.post(`https://form-mern-server.herokuapp.com/users/register`, {
                name, password
            }, config)
            if(response){
              setRegis(response.data.message)
            }

        }catch(error) {
            if ( error.response && error.response.status >= 400 && error.response.status <= 500) {
              setError(error.response.data.errors.errors[0].msg);
            }
        }
    }   


  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5">
        <h1 className="text-center">Register</h1>
        <form onSubmit={formChange}>
        {error && <div className="alert alert-danger">{error}</div>}
        {regis && <div className="alert alert-success">{regis}</div>}
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
          <MDBBtn onClick={() => register(name, password)} type="submit" block>
            Sign in
          </MDBBtn>
        </form>
      </div>
    </div>
  );
};

export default Register;
