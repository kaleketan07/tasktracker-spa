import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Users from './users';
import Nav from './nav';
import Agenda from './agenda';
import TaskForm from './task-form';
import TaskEditForm from './taskeditform';
import Register from './register';
import Tasks from './tasks';
import LoginForm from './loginform';

export default function tasktracker_init() {
  ReactDOM.render(
    <TasktrackerComp />,
    document.getElementById('root')
  );
}


class TasktrackerComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      users: [],
    };

    this.request_tasks();
    this.request_users();
  }

  request_tasks(){
    $.ajax("api/v1/tasks", {
      method: "get",
      dataType: "json",
      contentType: "aplication/json; charset=UTF-8",
      success: (resp) => {
        this.setState(_.extend(this.state, {tasks:resp.data}));
      },
    });
  }

  request_users(){
    $.ajax("api/v1/users", {
      method: "get",
      dataType: "json",
      contentType: "aplication/json; charset=UTF-8",
      success: (resp) => {
        this.setState(_.extend(this.state, {users:resp.data}));
      },
    });
  }

  render(){
    return(
      <Router>
        <div>
          <h1>Task Tracker</h1>

          <Route path="/" exact={true} render ={ () =>
            <div>
                <LoginForm />
            </div>
            } />

          <Route path="/users" exact={true} render ={ () =>
              <div>
                  <Nav />
                  <Users users = {this.state.users}/>
              </div>
            } />
          <Route path="/tasks" exact={true} render ={ () =>
              <div>
                  <Nav />
                  <Tasks tasks = {this.state.tasks} />
              </div>
           } />
         <Route path="/users/:user_id" exact={true} render ={ ({match}) =>
             <div>
                 <Nav />
                 <TaskForm users = {this.state.users}/>
                 <h1>My Agenda</h1>
                 <Agenda tasks = {_.filter(this.state.tasks, (task) =>
                   match.params.user_id == task.user.id)}/>

             </div>
           } />
         <Route path="/tasks/:task_id" exact={true} render ={ () =>
             <div>
                <Nav />
                  <TaskEditForm users = {this.state.users}/>
             </div>
           } />
         <Route path="/register" exact={true} render ={ () =>
              <div>
                <Nav />
                <Register />
              </div>
           } />
        </div>
      </Router>
    );
  }
}
