import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button } from 'reactstrap';
import api from '../api';
function Task(params) {
  function deletetask(){
    api.delete_task(params.task, params.task.id);
  }
  function fetchTaskDetails() {
    api.fetch_details(params.task.id);
  }
  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p><b>{ task.title }</b></p>
        <p>{ task.body }</p>
        <Link to = {"/tasks/" + params.task.id} onClick = {fetchTaskDetails} className = "btn btn-Primary"> edit </Link>
        <Button onClick = {deletetask} className = "btn btn-Secondary"> Delete</Button>
    </div>
    </CardBody>
  </Card>;
}




export default function Agenda(params) {
  let tasks = _.map(params.tasks, (task) => <Task key={task.id} task={task} />);
  return <div>
    { tasks }
  </div>;
}
