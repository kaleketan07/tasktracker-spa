import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

function Task(params) {
  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p><b>{ task.title }</b></p>
        <p>{ task.body }</p>
        <Link to = {"/tasks/" + params.task.id}> edit </Link>
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
