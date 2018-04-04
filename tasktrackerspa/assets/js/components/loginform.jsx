import React from 'react';
import { Link } from 'react-router-dom'
import { Button, FormGroup, Label, Input } from 'reactstrap';



export default function LoginForm() {
  return <div>
    <FormGroup>
      <Label for = "name"> Enter Name </Label>
      <Input type = "text" name = "name" placeholder = "Enter name here.."/>
    </FormGroup>
    <FormGroup>
      <Label for = "password"> Enter Password </Label>
      <Input type = "password" name = "password" placeholder = "Enter password here.."/>
    </FormGroup>
    <Button onClick = {() => alert("Registering an account")}>Login</Button>


    <Link to="/register" href = "#" className = "nav-link">New User?</Link>
  </div>;

}
