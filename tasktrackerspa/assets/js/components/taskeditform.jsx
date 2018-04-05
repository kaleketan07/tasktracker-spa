import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import api from '../api';

function TaskEditForm(props){

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

    function edit() {
      if ((Number(props.form.timespent) % 15) == 0){
        api.edit_task(props.form,props.tid);
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

    return (<div>
      <h2>Edit Task:</h2>

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

      <p><Button onClick = {edit}> Edit </Button></p>

    </div>);
}

function statetoprops(state) {
  console.log("state:", state)
  return {
    form: state.taskedit,
  };

}

export default connect(statetoprops)(TaskEditForm)
