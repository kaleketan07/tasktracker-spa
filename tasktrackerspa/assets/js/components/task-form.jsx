import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import api from '../api';

function TaskForm(props){

    function createtask(ev){
      let target = $(ev.target);
      let data = {};
      data[target.attr('name')] = target.val();
      data['status'] = $('#cb').prop('checked') ? true : false;
      let action = {
        type: 'UPDATE_TASK',
        data: data,
      }
      props.dispatch(action);
    }

    function submit() {
      if ((Number(props.form.timespent) % 15) == 0){
        api.submit_create(props.form);
        clear();
      }
      else{
        alert("The time spent should be in mutliples of 15 minutes");
      }


    }

    function clear(){
      props.dispatch({
        type: 'CLEAR_FORM',
      });
    }

    let users = _.map(props.users, (user) =>
    <option key= {user.id} value = {user.id}>{user.name}</option>);

    return <div>
      <h2>Create New Task:</h2>

      <FormGroup>
        <Label for = "title"> Task Title </Label>
        <Input type = "text" name = "title" value = {props.form.title} onChange = {createtask}/>
      </FormGroup>
      <FormGroup>
        <Label for = "body"> Task Description </Label>
        <Input type = "textarea" name = "body" value = {props.form.body} onChange = {createtask}/>
      </FormGroup>
      <FormGroup>
        <Label for = "timespent"> Timespent </Label>
        <Input type = "text" name = "timespent" value = {props.form.timespent} onChange = {createtask}/>
      </FormGroup>
      <FormGroup>
        <Label for = "status"> Completed </Label>
        <Input type = "checkbox" id = "cb" name = "status" value = {props.form.status} checked = {props.form.status} onChange = {createtask}/>

      </FormGroup>
      <FormGroup>
        <Label for = "user_id"> Assigned to </Label>
        <Input type = "select" name = "user_id" value = {props.form.user_id} onChange = {createtask}>
          { users }
       </Input>
      </FormGroup>

      <p><Button onClick = {submit}> Create </Button></p>

    </div>;
}

function statetoprops(state) {

  return {
    form: state.taskcreate,
  };

}

export default connect(statetoprops)(TaskForm)
