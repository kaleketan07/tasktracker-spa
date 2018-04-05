import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function Register(props) {

  function createUser (ev){

      let target = $(ev.target);
      let data = {};
      data[target.attr('name')] = target.val();
      let action = {
        type: 'UPDATE_USER',
        data: data,
      }
      props.dispatch(action);
  }

  function submit() {
  if((props.form.name!= "")&& (props.form.password!= "") && (props.form.email!= "")) {
    api.register_user(props.form, props.history);
  }
  else{
    alert("Enter all the details first");
  }

  }



  return <div>
              <h1>Register here:</h1>

              <FormGroup>
                <Label for = "email"> Enter Email</Label>
                <Input type = "text" name = "email" value = {props.form.email} onChange = {createUser} placeholder = "Enter email here.."/>
              </FormGroup>
              <FormGroup>
                <Label for = "name"> Enter Name </Label>
                <Input type = "text" name = "name" value = {props.form.name} onChange = {createUser} placeholder = "Enter name here.."/>
              </FormGroup>
              <FormGroup>
                <Label for = "password"> Enter Password </Label>
                <Input type = "password" name = "password" value = {props.form.password} onChange = {createUser} placeholder = "Enter password here.."/>
              </FormGroup>
              <Button onClick = {submit}>Register Account</Button>



    </div>;

}

function statetoprops(state) {

  return {
    form: state.registerform,
  };

}

export default connect(statetoprops)(Register)
