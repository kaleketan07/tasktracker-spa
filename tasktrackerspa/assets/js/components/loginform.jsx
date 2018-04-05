import React from 'react';
import { Link, Route, Redirect} from 'react-router-dom'
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import api from '../api';


function LoginForm(props) {

  function update(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr('name')] = tgt.val();
    props.dispatch({
      type: 'UPDATE_USER_LOGIN',
      data: data,
    });
  }
  function create_token() {
    if((props.form.name!= "")&& (props.form.password!= "")){
      api.submit_login(props.form, props.history);}
    else{
      alert("Please enter details");
    }
    }


  return <div>
    <FormGroup>
      <Label for = "name"> Enter Name </Label>
      <Input type = "text" name = "name" value = {props.form.name} onChange = {update} placeholder = "Enter name here.."/>
    </FormGroup>
    <FormGroup>
      <Label for = "password"> Enter Password </Label>
      <Input type = "password" name = "password" value = {props.form.password} onChange = {update} placeholder = "Enter password here.."/>
    </FormGroup>
    <Button onClick = {create_token}>Login</Button>


    <Link to="/register" href = "#" className = "nav-link">New User?</Link>
  </div>;

}

function statetoprops(state) {

  return {
    form: state.loginform,
  };

}

export default connect(statetoprops)(LoginForm)
