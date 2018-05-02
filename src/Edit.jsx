import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: this.props.user.lastName,
      firstname: this.props.user.firstName,
    };
  }
  takeV(e) {
    this.setState({ lastname: e.target.value });
  }
  takeF(e) {
    this.setState({ firstname: e.target.value });
  }
  render() {
    return (
      <div>
        <input
          name="firstname"
          type="text"
          onChange={this.takeF.bind(this)}
          defaultValue={this.props.user.firstName}
        />
        <br />
        <input
          name="lastname"
          type="text"
          onChange={this.takeV.bind(this)}
          defaultValue={this.props.user.lastName}
        />
        <br />
        <button
          onClick={() =>
            this.props.editUser(this.state.firstname, this.state.lastname)
          }
        >
          Edit
        </button>
      </div>
    );
  }
}

export default Edit;
