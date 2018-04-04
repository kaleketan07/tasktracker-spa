import store from './store';

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
}

export default new TheServer();
