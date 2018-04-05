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
    status: "",
    user_id: "1",
};

function tasks(state = [], action) {
  switch (action.type) {
    case 'TASK_LIST':
      return [...action.tasks];
    case 'CREATE_TASK':
      return [action.task, ...state];
    case 'DELETE_TASK':
      let state1 = Object.assign([], state);
      // Logic for finding index
      // attribution: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      let index = state.findIndex(t => {return t.id == action.task});
      state1.splice(index, 1);
      return state1;
    case 'EDIT_TASK':
      let state2 = Object.assign([], state);
      console.log("this");
      // Logic for finding index
      // attribution: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      let index1 = state.findIndex(t => {return t.id == action.task.id});
      state2.splice(index1, 1);
      return [action.task, ...state2];

    default:
      return state;
  }

}

function users(state = [], action) {
  switch (action.type) {
    case 'USER_LIST':
      return [...action.users];
    case 'CREATE_USER':
      console.log('request received');
      return [action.user, ...state];
    default:
      return state;
  }
}

let EmptyRegistrationForm = {
  email: "",
  name: "",
  password: "",
}

function registerform(state = EmptyRegistrationForm, action ) {
  switch (action.type) {
    case 'UPDATE_USER':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

let EmptyLoginForm = {
  email: "",
  password: ""
}

function loginform(state = EmptyLoginForm, action) {
  switch (action.type) {
    case 'UPDATE_USER_LOGIN':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

function taskcreate(state = EmptyTaskCreateForm, action) {
  switch (action.type) {
    case 'UPDATE_TASK':
      return Object.assign({}, state, action.data);
    case 'CLEAR_FORM':
      return Object.assign({}, state, EmptyTaskCreateForm);
    default:
      return state;
  }
}

function taskedit(state = EmptyTaskCreateForm, action) {
  switch (action.type) {
    case 'UPDATE_TASK':
      return Object.assign({}, state, action.data);
    case 'CLEAR_FORM':
      return Object.assign({}, state, EmptyTaskCreateForm);
    case 'FILL_DETAILS':
      return Object.assign({}, state, action.task);
    default:
      return state;
  }
}

//attribution : The below code is adopted from rhe starter code given in Nat's Notes

function token(state = null, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    default:
      return state;
  }
}


function root_reducer(state0, action) {
  console.log("state0", state0);
  console.log("action", action);
  let reducer = combineReducers({tasks,users,taskcreate,taskedit,registerform,loginform,token});
  let state1 = reducer(state0, action);
  console.log("state1", state1);

  return deepFreeze(state1);
};


let store = createStore(root_reducer);
export default store;
