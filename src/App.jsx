// Theirs
import React, { Component } from "react";

import List from "./List.jsx";
import Create from "./Create.jsx";
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
    };
    this.onAddUser = this.onAddUser.bind(this);
  }

  onAddUser() {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.view = "Create";

    this.setState(newState);
  }

  get currentView() {
    if (this.state.view === "List") {
      return <List users={this.state.users} onAddUser={this.onAddUser} />;
    }
    if (this.state.view === "Create") {
      return <Create />;
    }
  }

  render() {
    return <div className="App">{this.currentView}</div>;
  }
}

export default App;
