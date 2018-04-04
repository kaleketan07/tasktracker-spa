import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';


export default function TaskEditForm(props){
    let users = _.map(props.users, (user) =>
  <option key= {user.id} value = {user.id}>{user.name}</option>);
    return <div>
      <h2>Create New Task:</h2>

      <FormGroup>
        <Label for = "title"> Task Title </Label>
        <Input type = "text" name = "title" />
      </FormGroup>
      <FormGroup>
        <Label for = "body"> Task Description </Label>
        <Input type = "textarea" name = "body" />
      </FormGroup>
      <FormGroup>
        <Label for = "timespent"> Timespent </Label>
        <Input type = "text" name = "timespent" />
      </FormGroup>
      <FormGroup>
        <Label for = "status"> Completed </Label>
        <Input type = "checkbox" name = "status" />
      </FormGroup>
      <FormGroup>
        <Label for = "user_id"> Assigned to </Label>
        <Input type = "select" name = "user_id">
          { users }
       </Input>
      </FormGroup>

      <p><Button onClick = {() => alert("creates a new task")}> Create </Button></p>

    </div>;
}
