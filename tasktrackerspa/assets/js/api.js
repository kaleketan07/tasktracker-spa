import store from './store';
import React from 'react';
import { Route } from 'react-router-dom';




class TheServer {
  request_tasks(){
    $.ajax("api/v1/tasks", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'TASK_LIST',
          tasks: resp.data
        });
      },
    });
  }

  request_users(){
    $.ajax("api/v1/users", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'USER_LIST',
          users: resp.data
        });
      },
    });
  }

  submit_create(data){
    console.log("task:", data);
    $.ajax("/api/v1/tasks", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({task: data}),
      success: (resp) => {
        store.dispatch({
          type: 'CREATE_TASK',
          task: resp.data
        });

      },
      error: () => alert("error creating a task")
    });
  }

  register_user(data, history) {
    console.log(data);
    $.ajax("/api/v1/users", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({user: data}),
      success: (resp) => {
        store.dispatch({
          type: 'CREATE_USER',
          user: resp.data
        });
        alert("user created successfully! Please log in");
      },
      error: () => alert("error creating a user")
    });
  }

  delete_task(data, id) {
    $.ajax("/api/v1/tasks/" + id, {
      method: "delete",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: (resp) => {
        store.dispatch({
          type: 'DELETE_TASK',
          task: id
        });
      }
    });
  }
  edit_task(data, id) {
    $.ajax("/api/v1/tasks/" + id, {
      method: "put",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({task: data}),
      success: (resp) => {
        store.dispatch({
          type: 'EDIT_TASK',
          task: resp.data
        });
        alert("task updated successfully")
      },
      error: () => alert("error editing the task")
    });
  }

  fetch_details(id) {
    $.ajax("/api/v1/tasks/" + id, {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: (resp) => {
        let taskdetails = {
          title: resp.data.title,
          body: resp.data.body,
          timespent: resp.data.timespent,
          status: resp.data.status,
          user_id: resp.data.user_id
        }
        store.dispatch({
          type: 'FILL_DETAILS',
          task: taskdetails
        });
      },
    });
  }

  submit_login(data, history){
    $.ajax("/api/v1/token", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: (resp) => {
        store.dispatch({
          type: 'SET_TOKEN',
          token: resp,
        });
        history.push("users/"+resp.user_id);
      },
      error: () => alert("Incorrect Credentials!")
    });
  }



}

export default new TheServer();
