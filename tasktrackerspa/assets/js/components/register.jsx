import React from 'react';
import { Link } from 'react-router-dom'
import { Button, FormGroup, Label, Input } from 'reactstrap';


export default function Register() {

  return <div>
              <h1>Register here:</h1>

              <FormGroup>
                <Label for = "email"> Enter Email</Label>
                <Input type = "text" name = "email" placeholder = "Enter email here.."/>
              </FormGroup>
              <FormGroup>
                <Label for = "name"> Enter Name </Label>
                <Input type = "text" name = "name" placeholder = "Enter name here.."/>
              </FormGroup>
              <FormGroup>
                <Label for = "password"> Enter Password </Label>
                <Input type = "password" name = "password" placeholder = "Enter password here.."/>
              </FormGroup>
              <Button onClick = {() => alert("Registering an account")}>Register Account</Button>


              <Link to="/users" href = "#" className = "nav-link">My feed</Link>

    </div>;

}
