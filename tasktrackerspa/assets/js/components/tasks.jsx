import React from 'react';


function Task(params) {

  let status = params.task.status ? "Completed" : "Working on it";
  return <div className = "row">
    <div className = "col-3">{params.task.title}</div>
    <div className = "col-3">{params.task.timespent}</div>
    <div className = "col-3">{params.task.user.name}</div>
    <div className = "col-3">{status}</div>

</div>
}

export default function Tasks(params) {
  let tasks = _.map(params.tasks, (task) => <Task key={task.id} task= {task} />);
  return (<div>
    <div className = "row">
      <div className = "col-3"><b>Title</b></div>
      <div className = "col-3"><b>Time Spent</b></div>
      <div className = "col-3"><b>Assigned-to</b></div>
      <div className = "col-3"><b>Status</b></div>

  </div>
    {tasks}
  </div>);
}
