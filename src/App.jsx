// Theirs
import React, { Component } from "react";

import List from "./List.jsx";
import Create from "./Create.jsx";
import Edit from "./Edit.jsx";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { firstName: "Meowze", lastName: "Dong" },
        { firstName: "Hana", lastName: "March" },
        { firstName: "Mia", lastName: "Kirmse" },
      ],
      view: "List",
      idx: 0,
    };
    this.onAddUser = this.onAddUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.onEditUser = this.onEditUser.bind(this);
    this.onDeleteUser = this.onDeleteUser.bind(this);
  }

  onAddUser() {
    const newState = JSON.parse(JSON.stringify(this.state));

    newState.view = "Create";
    this.setState(newState);
  }

  onEditUser(idx) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.view = "Edit";
    newState.idx = idx;
    this.setState(newState);
  }

  onDeleteUser(idx) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.view = "Delete";
    newState.idx = idx;
    newState.users.splice(newState.idx, 1);
    this.setState(newState);
  }

  editUser(firstName, lastName) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.users[newState.idx].firstName = firstName;
    newState.users[newState.idx].lastName = lastName;
    newState.view = "List";
    this.setState(newState);
  }

  createUser(firstName, lastName) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.users.push({ firstName, lastName });
    newState.view = "List";
    this.setState(newState);
  }

  get currentView() {
    if (this.state.view === "List") {
      return (
        <List
          users={this.state.users}
          onAddUser={this.onAddUser}
          onEditUser={this.onEditUser}
          onDeleteUser={this.onDeleteUser}
        />
      );
    }
    if (this.state.view === "Create") {
      return <Create users={this.state.users} createUser={this.createUser} />;
    }
    if (this.state.view === "Edit") {
      return (
        <Edit
          user={this.state.users[this.state.idx]}
          editUser={this.editUser}
        />
      );
    }
    if (this.state.view === "Delete") {
      return (
        <List
          users={this.state.users}
          onAddUser={this.onAddUser}
          onEditUser={this.onEditUser}
          onDeleteUser={this.onDeleteUser}
        />
      );
    }
  }

  render() {
    return <div className="App">{this.currentView}</div>;
  }
}

export default App;
