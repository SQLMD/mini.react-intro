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
  }

  onAddUser() {
    const newState = JSON.parse(JSON.stringify(this.state));

    newState.view = "Create";
    this.setState(newState);
  }

  onEditUser(idx) {
    console.log(idx);
    console.log(this.state);

    //show the edit view
    const newState = JSON.parse(JSON.stringify(this.state));
    this.newState.setState({ idx, view: "Edit" });
    //update currentUserIndex
    //edit view has input form filled out already using placeholders
    //click on edit use edit User function
  }

  editUser(firstName, lastName) {
    //update the state with the new values
    //change the view back to List
    const newState = JSON.parse(JSON.stringify(this.state));
    console.log(firstName, lastName);
    newState.users[newState.idx] = { firstName, lastName };
    newState.view = "List";
    this.setState(newState);
  }

  createUser(firstName, lastName) {
    const newState = JSON.parse(JSON.stringify(this.state));
    console.log(firstName, lastName);
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
  }

  render() {
    return <div className="App">{this.currentView}</div>;
  }
}

export default App;
