import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, idx) => {
            return <li key={idx}>{user.firstName}</li>;
          })}
        </ul>
        <button onClick={this.props.onAddUser}>Add</button>
      </div>
    );
  }
}

export default List;
