import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { connect } from 'react-redux';

let Session = connect((state) => state)((props) => {
  function resettoken() {
    store.dispatch({
      type: "SET_TOKEN",
      token: ""
    });
  }
  let allusers = props.users;
  let user = allusers.find(t => {return t.id == props.token.user_id});
  return <div className="navbar-text">

    Logged in as: {user.name}
    <NavLink to="/" href="#" onClick = {resettoken} className="nav-link">Logout</NavLink>

  </div>;
});


function Nav(props) {
  let session_info;

    if (props.token) {
      session_info = <Session token={props.token} />;
    }
    else {
      session_info = <div></div>
    }
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">

      <ul className="navbar-nav mr-auto">

        <NavItem>
          <NavLink to="/users" href="#" className="nav-link">All Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tasks" href="#" className="nav-link">All tasks</NavLink>
        </NavItem>
      </ul>
        <span>
            {session_info}
        </span>
    </nav>
  );
}

function state2props(state) {
  return {
    token: state.token,
  };
}

export default connect(state2props)(Nav);
