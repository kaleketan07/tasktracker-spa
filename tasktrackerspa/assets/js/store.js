import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

// state :
// {
//   Users
//   Tasks
//   TaskCreation form{
//    title: String
//    body: textarea
//    timespent: Number
//    Status: Boolean
//    User_id: number
// }
//   Taskedit Form
//   Create user form.
// }

let EmptyTaskCreateForm = {
    title: "",
    body: "",
    timespent: "",
    status: false,
    user_id: "1",
};

function tasks(state = [], action) {
  switch (action.type) {
    case 'TASK_LIST':
      return [...action.tasks];
    default:
      return state;
  }

}

function users(state = [], action) {
  switch (action.type) {
    case 'USER_LIST':
      return [...action.users];
    default:
      return state;
  }
}

function taskcreate(state = EmptyTaskCreateForm, action) {
  switch (action.type) {
    case 'CREATE_TASK':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  
  let reducer = combineReducers({tasks,users,taskcreate});
  let state1 = reducer(state0, action);
  return deepFreeze(state1);
};


let store = createStore(root_reducer);
export default store;
