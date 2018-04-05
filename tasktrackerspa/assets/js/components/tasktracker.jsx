import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Users from './users';
import Nav from './nav';
import Agenda from './agenda';
import TaskForm from './task-form';
import TaskEditForm from './taskeditform';
import Register from './register';
import Tasks from './tasks';
import LoginForm from './loginform';

export default function tasktracker_init(store) {
  ReactDOM.render(
    <Provider store = { store }>
      <TasktrackerComp />
    </Provider>,
    document.getElementById('root')
  );
}



let TasktrackerComp = connect((state) => state)((props) =>
  {
    return(
      <Router>
        <div>
          <h1>Task Tracker</h1>

          <Route path="/" exact={true} render ={ ({history}) =>
            <div>
                <LoginForm history = {history}/>
            </div>
            } />

          <Route path="/users" exact={true} render ={ () =>
              <div>
                  <Nav token = {props.token} />
                  <Users users = {props.users}/>
              </div>
            } />
          <Route path="/tasks" exact={true} render ={ () =>
              <div>
                  <Nav token = {props.token}/>
                  <Tasks tasks = {props.tasks} />
              </div>
           } />
         <Route path="/users/:user_id" exact={true} render ={ ({match}) =>
             <div>
                 <Nav token = {props.token}/>
                 <TaskForm users = {props.users}/>
                 <h1>My Agenda</h1>
                 <Agenda tasks = {_.filter(props.tasks, (task) =>
                   match.params.user_id == task.user.id)}/>

             </div>
           } />
         <Route path="/tasks/:task_id" exact={true} render ={ ({match}) =>
             <div>
                  <Nav token = {props.token}/>
                  <TaskEditForm tid = {match.params.task_id} users = {props.users}/>
             </div>
           } />
         <Route path="/register" exact={true} render ={ ({history}) =>
              <div>
                <Nav />
                <Register history = {history}/>
              </div>
           } />
        </div>
      </Router>
    );
  });
